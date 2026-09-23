function perimetroRectangulo(a,b){
        return 2 *(b * a );
}
console.log(perimetroRectangulo(2,5))

//Función Anónima => es una funciona que no tiene nombre 

let perimteroAnonimo = function(a,b){
    return 2 * (base + altura )
}

//Función flecha 

let perimetroFlecha =(base , altura ) => {
    return 2 * (base * altura )
}

let doblar = num => 2 * (num)


/ Función flecha para determinar si un número es primo
let esPrimo = num => {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
    
    // Verificamos si tiene algún divisor desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible por otro número, no es primo
        }
    }
    return true; // Si no encontró divisores, es primo
};

// Pruebas en consola
console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false
console.log(esPrimo(1));  // false
console.log(esPrimo(13)); // true