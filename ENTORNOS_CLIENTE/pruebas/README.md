# Sistema de Gestión de Inventario

Aplicación web para gestionar inventario de productos, desarrollada con HTML, CSS y JavaScript vanilla.

## Características

- **Agregar productos** con nombre, categoría, cantidad, precio y descripción
- **Editar productos** existentes
- **Eliminar productos** con confirmación
- **Buscar productos** por nombre en tiempo real
- **Filtrar por categoría**
- **Estadísticas en tiempo real**: total de productos, stock, valor total y alertas de stock bajo
- **Persistencia de datos** con localStorage
- **Diseño responsive** para móvil, tablet y escritorio
- **Indicadores visuales** de estado del stock (Disponible, Stock Bajo, Agotado)

## Estructura del Proyecto

```
pruebas/
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos y diseño visual
├── app.js          # Lógica de la aplicación
└── README.md       # Este archivo
```

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Completa el formulario para agregar productos
3. Usa la barra de búsqueda para encontrar productos
4. Filtra por categoría usando el desplegable
5. Haz clic en "Editar" para modificar un producto
6. Haz clic en "Eliminar" para quitar un producto (pedirá confirmación)

## Categorías Disponibles

- Electrónica
- Alimentos
- Ropa
- Hogar
- Oficina
- Otros

## Almacenamiento

Los datos se guardan automáticamente en el navegador usando localStorage. No se pierden al cerrar la página.

## Tecnologías

- HTML5
- CSS3 (Variables, Grid, Flexbox, Animaciones)
- JavaScript (ES6+, Clases, LocalStorage)
