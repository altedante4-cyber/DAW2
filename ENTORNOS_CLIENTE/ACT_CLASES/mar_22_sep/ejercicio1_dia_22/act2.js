let infomarcion = prompt("Ingrese tres numeros enteros ").split(" ");

let numero_mayor = false  ;
for(let i = 0 ; i < infomarcion.length ; i++ ){
        
         if(parseInt(infomarcion[i]) > 10  ){
                numero_mayor = true ;  
         }

}


if(!numero_mayor){
        alert("No se encontro ningun numero mayor a 10 ");
}else{
    alert("Se encontro  numeros mayores que 10 ");
}