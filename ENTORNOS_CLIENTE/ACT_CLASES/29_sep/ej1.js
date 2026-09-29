
let observar = function(){
    alert("Te estoy observando");
}
let id = setTimeout(observar,7000)

//funcion flecha

//let id1= setTimeout(() => alert("te estoy observando"),7000);

let nuevaVentana = window.open("https://www.realmadrid.com/es-ES","VINICIUS","height=100 , width=100")

// abre la ventana cada 2segundos

setTimeout(nuevaVentana,2000);


let time = setTimeout(() => {
    window.open("https://www.realmadrid.com/es-ES","VINICIUS","height=100 , width=100")

},3000)