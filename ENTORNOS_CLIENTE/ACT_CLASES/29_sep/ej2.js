let ele1 = document.getElementById("elem1");
let guardar = ele1.textContent; 
let ele2 = document.getElementById("elem2");
let guardar2 = ele2.textContent;
ele1.textContent = "";

let id = setTimeout(() => {
    ele1.innerHTML = guardar;
}, 5000);

//Codigo parpadear

window.setInterval(() => {
    if(ele2.textContent === ""){
        ele2.innerHTML = guardar2;
    }else{
            ele2.innerHTML = "" ;
    }
},500)

let colores = []
for(let i = 0 ; i < 8 ; i++ ){
        let aux = [];    
    for(let j = 0  ; j < 3 ; j++){
            let numero = Math.random() * 255 ;
            aux.push(numero);
        }
        
        colores.push(aux.join());
        
}


let es = setTimeout(() => {
   let elegir = colores[Math.floor(Math.random() * colores.length)];
   let separar = elegir.split(",");
   let coloranterior = document.body.style.background=` rgb(${parseInt(separar[0])},${parseInt(separar[1])},${parseInt(separar[2])})`
   let colorposterior = coloranterior ;

    setInterval(() => {
            if(coloranterior === colorposterior){
            elegir = colores[Math.floor(Math.random() * colores.length)];
            separar = elegir.split(",");
            colorposterior = document.body.style.background=` rgb(${parseInt(separar[0])},${parseInt(separar[1])},${parseInt(separar[2])})`
                coloranterior= colorposterior;
        }
    },2000 ) 
   

}, 10000);