let pedir_valores = prompt("INGRESE TRES VALORES SEPARADOS POR COMA");
let nombre = prompt("Ingrese el nombre ");
let apellido = prompt("Ingrese el apellido");


let numeros_ingresados= pedir_valores.split(",");

let suma_total = 0 ;
let multiplicacion = 1 ; 
let division_primer_ultimo = 0 ; 

for (let i = 0 ; i < numeros_ingresados.length ; i++ ){
          suma_total += parseInt(numeros_ingresados[i]);
           multiplicacion *= parseInt(numeros_ingresados[i]);          
}

if(parseInt(numeros_ingresados[0]) !== 0 ){
            division_primer_ultimo = parseInt(numeros_ingresados[0]) / parseInt(numeros_ingresados[1]);
}else{
        alert("El primer numero es 0 por lo cual no se puede dividir")
        
}

console.log(`multiplicacion => ${multiplicacion}`);
console.log(`division => ${division_primer_ultimo}`)

console.log(`La suma total es ${suma_total}`);
console.log(numeros_ingresados.join(","));
console.log(`Nombre: ${nombre} Apellido : ${apellido}`);
