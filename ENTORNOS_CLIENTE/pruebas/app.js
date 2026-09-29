/**
 * Sistema de Gestión de Inventario
 * Aplicación web con persistencia en localStorage
 */

class Inventario {
    constructor() {
        this.productos = this.cargarProductos();
        this.productoEditando = null;
        this.productoAEliminar = null;
        this.stockBajoUmbral = 5;
        
        this.init();
    }

    init() {
        this.cachearElementos();
        this.bindEventos();
        this.renderizar();
    }

    cachearElementos() {
        this.form = document.getElementById('product-form');
        this.formTitle = document.getElementById('form-title');
        this.submitBtn = document.getElementById('submit-btn');
        this.cancelBtn = document.getElementById('cancel-btn');
        
        this.inputId = document.getElementById('product-id');
        this.inputNombre = document.getElementById('nombre');
        this.inputCategoria = document.getElementById('categoria');
        this.inputCantidad = document.getElementById('cantidad');
        this.inputPrecio = document.getElementById('precio');
        this.inputDescripcion = document.getElementById('descripcion');
        
        this.tableBody = document.getElementById('table-body');
        this.emptyState = document.getElementById('empty-state');
        
        this.searchInput = document.getElementById('search-input');
        this.filterCategoria = document.getElementById('filter-categoria');
        
        this.modal = document.getElementById('modal');
        this.confirmDeleteBtn = document.getElementById('confirm-delete');
        this.cancelDeleteBtn = document.getElementById('cancel-delete');
        
        // Estadísticas
        this.statTotalProductos = document.getElementById('total-productos');
        this.statTotalStock = document.getElementById('total-stock');
        this.statValorTotal = document.getElementById('valor-total');
        this.statStockBajo = document.getElementById('stock-bajo');
    }

    bindEventos() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.cancelBtn.addEventListener('click', () => this.cancelarEdicion());
        
        this.searchInput.addEventListener('input', () => this.renderizar());
        this.filterCategoria.addEventListener('change', () => this.renderizar());
        
        this.confirmDeleteBtn.addEventListener('click', () => this.confirmarEliminacion());
        this.cancelDeleteBtn.addEventListener('click', () => this.cerrarModal());
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.cerrarModal();
        });
    }

    cargarProductos() {
        const datos = localStorage.getItem('inventario_productos');
        return datos ? JSON.parse(datos) : [];
    }

    guardarProductos() {
        localStorage.setItem('inventario_productos', JSON.stringify(this.productos));
    }

    generarId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const producto = {
            id: this.inputId.value || this.generarId(),
            nombre: this.inputNombre.value.trim(),
            categoria: this.inputCategoria.value,
            cantidad: parseInt(this.inputCantidad.value) || 0,
            precio: parseFloat(this.inputPrecio.value) || 0,
            descripcion: this.inputDescripcion.value.trim(),
            fechaCreacion: this.productoEditando?.fechaCreacion || new Date().toISOString(),
            fechaActualizacion: new Date().toISOString()
        };

        if (this.productoEditando) {
            this.actualizarProducto(producto);
        } else {
            this.agregarProducto(producto);
        }

        this.form.reset();
        this.cancelarEdicion();
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.guardarProductos();
        this.renderizar();
        this.mostrarNotificacion('Producto agregado correctamente', 'success');
    }

    actualizarProducto(producto) {
        const index = this.productos.findIndex(p => p.id === producto.id);
        if (index !== -1) {
            this.productos[index] = producto;
            this.guardarProductos();
            this.renderizar();
            this.mostrarNotificacion('Producto actualizado correctamente', 'success');
        }
    }

    editarProducto(id) {
        const producto = this.productos.find(p => p.id === id);
        if (!producto) return;

        this.productoEditando = producto;
        
        this.inputId.value = producto.id;
        this.inputNombre.value = producto.nombre;
        this.inputCategoria.value = producto.categoria;
        this.inputCantidad.value = producto.cantidad;
        this.inputPrecio.value = producto.precio;
        this.inputDescripcion.value = producto.descripcion || '';

        this.formTitle.textContent = 'Editar Producto';
        this.submitBtn.textContent = 'Actualizar Producto';
        this.cancelBtn.style.display = 'inline-block';

        this.inputNombre.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    cancelarEdicion() {
        this.productoEditando = null;
        this.inputId.value = '';
        this.form.reset();
        
        this.formTitle.textContent = 'Agregar Producto';
        this.submitBtn.textContent = 'Agregar Producto';
        this.cancelBtn.style.display = 'none';
    }

    eliminarProducto(id) {
        this.productoAEliminar = id;
        this.modal.classList.add('show');
    }

    confirmarEliminacion() {
        if (this.productoAEliminar) {
            this.productos = this.productos.filter(p => p.id !== this.productoAEliminar);
            this.guardarProductos();
            this.renderizar();
            this.mostrarNotificacion('Producto eliminado correctamente', 'success');
        }
        this.cerrarModal();
    }

    cerrarModal() {
        this.modal.classList.remove('show');
        this.productoAEliminar = null;
    }

    getProductosFiltrados() {
        const busqueda = this.searchInput.value.toLowerCase().trim();
        const categoria = this.filterCategoria.value;

        return this.productos.filter(producto => {
            const coincideNombre = producto.nombre.toLowerCase().includes(busqueda);
            const coincideCategoria = !categoria || producto.categoria === categoria;
            return coincideNombre && coincideCategoria;
        });
    }

    getEstadoStock(cantidad) {
        if (cantidad === 0) return { texto: 'Agotado', clase: 'stock-out' };
        if (cantidad <= this.stockBajoUmbral) return { texto: 'Stock Bajo', clase: 'stock-low' };
        return { texto: 'Disponible', clase: 'stock-ok' };
    }

    formatearPrecio(precio) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(precio);
    }

    renderizar() {
        const productosFiltrados = this.getProductosFiltrados();
        
        this.renderizarTabla(productosFiltrados);
        this.renderizarEstadisticas();
    }

    renderizarTabla(productos) {
        if (productos.length === 0) {
            this.tableBody.innerHTML = '';
            this.emptyState.classList.add('show');
            return;
        }

        this.emptyState.classList.remove('show');
        
        this.tableBody.innerHTML = productos.map(producto => {
            const estado = this.getEstadoStock(producto.cantidad);
            const valorTotal = producto.cantidad * producto.precio;
            
            return `
                <tr>
                    <td>${producto.id.substr(-6).toUpperCase()}</td>
                    <td>
                        <strong>${this.escapeHtml(producto.nombre)}</strong>
                        ${producto.descripcion ? `<br><small>${this.escapeHtml(producto.descripcion)}</small>` : ''}
                    </td>
                    <td>${producto.categoria}</td>
                    <td>${producto.cantidad}</td>
                    <td>${this.formatearPrecio(producto.precio)}</td>
                    <td>${this.formatearPrecio(valorTotal)}</td>
                    <td><span class="stock-status ${estado.clase}">${estado.texto}</span></td>
                    <td>
                        <button class="btn btn-small btn-edit" onclick="app.editarProducto('${producto.id}')">
                            Editar
                        </button>
                        <button class="btn btn-small btn-delete" onclick="app.eliminarProducto('${producto.id}')">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    renderizarEstadisticas() {
        const totalProductos = this.productos.length;
        const totalStock = this.productos.reduce((sum, p) => sum + p.cantidad, 0);
        const valorTotal = this.productos.reduce((sum, p) => sum + (p.cantidad * p.precio), 0);
        const stockBajo = this.productos.filter(p => p.cantidad > 0 && p.cantidad <= this.stockBajoUmbral).length;

        this.statTotalProductos.textContent = totalProductos;
        this.statTotalStock.textContent = totalStock;
        this.statValorTotal.textContent = this.formatearPrecio(valorTotal);
        this.statStockBajo.textContent = stockBajo;
    }

    escapeHtml(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    mostrarNotificacion(mensaje, tipo = 'info') {
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion notificacion-${tipo}`;
        notificacion.textContent = mensaje;
        
        // Estilos inline para la notificación
        Object.assign(notificacion.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 25px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease',
            background: tipo === 'success' ? '#22c55e' : '#3b82f6'
        });

        document.body.appendChild(notificacion);

        // Remover después de 3 segundos
        setTimeout(() => {
            notificacion.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notificacion.remove(), 300);
        }, 3000);
    }
}

// Inicializar la aplicación
const app = new Inventario();
