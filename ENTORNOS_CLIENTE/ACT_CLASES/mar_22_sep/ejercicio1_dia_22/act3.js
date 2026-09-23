let informacion_fecha_mes = prompt("Ingrese el dia y mes siguiente formato 05/20");

let contiene_simbolo = false ;

if(informacion_fecha_mes){
for(let i = 0 ; i < informacion_fecha_mes.length ; i++ ){
         if(informacion_fecha_mes[i] === '/'){
                contiene_simbolo = true ;
         }
}

let obtener_elementos_numericos = informacion_fecha_mes.split("/");
        if(obtener_elementos_numericos[0] === "14"  && obtener_elementos_numericos[1] === "02"){
             alert("es el Día de San Valentín ");            
        }else{
            alert("No es el día de San Valentín");
        }

}else{
        alert("No se escribio nada ")
}

