// ==========================================
// 1. ARRAYS DE DATOS INICIALES (ENUNCIADO)
// ==========================================
const estudiantes = [
    "Ana García",
    "Luis Martínez",
    "María López",
    "Carlos Rodríguez",
    "Elena Sánchez",
    "Pedro Hernández"
];

const inventario = ["Laptop", "Mouse", "Teclado", "Monitor", "Tablet", "Mouse", "Auriculares"];

const tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Comprar víveres", "Llamar al médico", "Limpiar la casa"];

const futbolistas = [
    "Messi", "Ronaldo", "Neymar", "Mbappé", "Haaland", 
    "Lewandowski", "Benzema", "Salah", "De Bruyne", "Modrić"
];


// ==========================================
// 2. CAPTURA DE ELEMENTOS DEL DOM
// ==========================================

// Elementos volátiles y temporizadores
const bannerFantasma = document.getElementById("bannerFantasma");
const alertaParpadeante = document.getElementById("alertaParpadeante");
const btnFondo = document.getElementById("btnFondo");
const countdownBox = document.getElementById("countdown");
const contenedorCuadrados = document.getElementById("contenedorCuadrados");

// Bloques de texto para volcar resultados (Output Boxes)
const outEstudiantes = document.getElementById("outEstudiantes");
const outInventario = document.getElementById("outInventario");
const outTareas = document.getElementById("outTareas");
const outFutbolistas = document.getElementById("outFutbolistas");

// Botones Bloque A: Estudiantes
const btnSlice = document.getElementById("btnSlice");
const btnJoin = document.getElementById("btnJoin");
const btnSplit = document.getElementById("btnSplit");

// Botones Bloque B: Inventario
const btnIsArray = document.getElementById("btnIsArray");
const btnIncludes = document.getElementById("btnIncludes");
const btnIndexOf1 = document.getElementById("btnIndexOf1");
const btnIndexOf2 = document.getElementById("btnIndexOf2");

// Botones Bloque C: Tareas
const btnSortAZ = document.getElementById("btnSortAZ");
const btnReverse = document.getElementById("btnReverse");
const btnSortZA = document.getElementById("btnSortZA");
const btnLenAsc = document.getElementById("btnLenAsc");
const btnLenDesc = document.getElementById("btnLenDesc");

// Botones Bloque D: Futbolistas
const btnForEach = document.getElementById("btnForEach");
const btnEvery = document.getElementById("btnEvery");
const btnSome = document.getElementById("btnSome");
const btnMap = document.getElementById("btnMap");
const btnFindIndex = document.getElementById("btnFindIndex");
const btnFind = document.getElementById("btnFind");


// ==========================================
// 3. PARTE 1: LÓGICA DE TEMPORIZADORES Y DOM
// ==========================================

// Act 1: Ventana emergente tras 7 segundos
// TODO: Tu código aquí con setTimeout y window.open

// Act 2: Banner que desaparece tras 5 segundos
// TODO: Tu código aquí con setTimeout cambiando style.display o style.visibility

// Act 3: Alerta que parpadea de forma continua cada 1 segundo
// TODO: Tu código aquí con setInterval cambiando visibilidad de alertaParpadeante

// Act 4: Cambio de fondo dinámico entre 3 colores mediante un botón
const coloresFondo = ["#1e1b4b", "#064e3b", "#1c1917"]; // Puedes usar estos u otros 3 colores
// TODO: Tu código aquí para alternar el fondo del body cada 2 segundos tras pulsar btnFondo

// Act 5: Cuenta atrás regresiva de 10 a 0
// TODO: Tu código aquí con setInterval que actualice countdownBox y se limpie al llegar a 0

// Act 6: Mostrar la fecha actual del sistema una sola vez a los 20 segundos
// TODO: Tu código aquí con setTimeout, objeto Date y console.log

// Act 7: Rellenar el lienzo con cuadrados creados dinámicamente
// TODO: Utiliza un bucle para inyectar elementos con la clase "cuadrado-base" en contenedorCuadrados


// ==========================================
// 4. PARTE 2: LÓGICA DE PROCESAMIENTO DE ARRAYS
// ==========================================

// --- Bloque A: Estudiantes (Act 8) ---
btnSlice.addEventListener("click", () => {
    // TODO: Extraer desde posición 2 hasta 4 sin modificar original
    // outEstudiantes.textContent = ...
});

btnJoin.addEventListener("click", () => {
    // TODO: Convertir array a cadena separada por " | "
});

btnSplit.addEventListener("click", () => {
    // TODO: Separar el nombre y apellido del primer estudiante
});


// --- Bloque B: Inventario (Act 9) ---
btnIsArray.addEventListener("click", () => {
    // TODO: Comprobar si inventario es Array
    // outInventario.textContent = ...
});

btnIncludes.addEventListener("click", () => {
    // TODO: Verificar si "Tablet" está en el inventario
});

btnIndexOf1.addEventListener("click", () => {
    // TODO: Encontrar la primera posición de "Mouse"
});

btnIndexOf2.addEventListener("click", () => {
    // TODO: Encontrar la segunda posición de "Mouse" buscando desde el índice 2
});


// --- Bloque C: Tareas (Act 10) ---
// OJO: Recuerda si debes clonar la lista con [...tareas] si no quieres machacar la original permanentemente
btnSortAZ.addEventListener("click", () => {
    // TODO: Ordenar alfabéticamente A-Z
    // outTareas.textContent = ...
});

btnReverse.addEventListener("click", () => {
    // TODO: Invertir el orden de la lista
});

btnSortZA.addEventListener("click", () => {
    // TODO: Ordenar alfabéticamente inverso Z-A
});

btnLenAsc.addEventListener("click", () => {
    // TODO: Ordenar por longitud de texto (más corto a más largo)
});

btnLenDesc.addEventListener("click", () => {
    // TODO: Ordenar por longitud de texto (más largo a más corto)
});


// --- Bloque D: Futbolistas (Act 11) ---
// REQUISITO: Utilizar Arrow Functions (=>) dentro de los métodos
btnForEach.addEventListener("click", () => {
    // TODO: Mapear o recorrer cada futbolista con su índice
    // outFutbolistas.textContent = ...
});

btnEvery.addEventListener("click", () => {
    // TODO: Verificar si todos los nombres tienen más de 3 caracteres
});

btnSome.addEventListener("click", () => {
    // TODO: Comprobar si algún futbolista empieza por "M"
});

btnMap.addEventListener("click", () => {
    // TODO: Crear nuevo array con nombres en MAYÚSCULAS
});

btnFindIndex.addEventListener("click", () => {
    // TODO: Encontrar la posición del primer futbolista con más de 8 caracteres
});

btnFind.addEventListener("click", () => {
    // TODO: Encontrar el primer futbolista que contenga la letra "z"
});
