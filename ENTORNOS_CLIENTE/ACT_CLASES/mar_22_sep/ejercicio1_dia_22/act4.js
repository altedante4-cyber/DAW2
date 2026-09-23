let sueldo = parseInt(prompt("Sueldo "));
let antiguedad = parseInt(prompt("antiguedad"));

let aux_sueldo = 0 ; 
if(sueldo < 500 && antiguedad >= 10 ){
         aux_sueldo = sueldo * 3
          alert(`sueldo triplicado ${aux_sueldo}`)

}else if ( sueldo < 500 && antiguedad < 10 ){
    aux_sueldo = sueldo * 2     
    alert(`sueldo duplicado ${ sueldo * 2 }`)
         
}else if ( sueldo >= 500 ){
        alert("Sin cambios ");
}else{
        alert("Ingrese numeros validos ")
}

let elemento_tabla = document.getElementById("primario");
        let crear_tr = document.createElement("tr");
        
        let crear = crear_tr.innerHTML += `
             <td> ${sueldo} <br>
                  ${antiguedad}    
            </td>
            <td>  
                ${aux_sueldo}
            </td> 
        `
        
        elemento_tabla.appendChild(crear_tr)