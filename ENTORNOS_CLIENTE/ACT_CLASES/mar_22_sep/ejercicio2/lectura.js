let numero = parseInt(prompt("Ingrese un numero "));

let comprobar = (numero) => {
    if(isNaN(numero)){
    alert("No es un numero")
    }else{
    alert("Es un numero")
    }
}

comprobar(numero);