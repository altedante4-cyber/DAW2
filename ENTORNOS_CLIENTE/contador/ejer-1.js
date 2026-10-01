let btncontador = document.getElementById('startBtn'); 
let hasmap = new Map();
    let clave = 0 ; 

btncontador.addEventListener('click', () => { 
    let valorinicial = parseInt(prompt("Ingrese un numero")); 
    let aux = valorinicial;
    let valor = valorinicial * 1000;
let numeroAleatorio = parseInt(Math.random() * 4);

    let contador = window.setInterval(() => {
        if (valor === -1000 || valorinicial === -1) {
            clearInterval(contador);
            return; 
        }

        
        valorinicial -= 1;
        
        valor -= 1000;
        if (valorinicial >= 0) {
            console.log(valorinicial);
        }

        if (valorinicial === 0) {
            let convertir = numeroAleatorio * 1000;
            let constFecha = new Date();
            
            let fecha = constFecha.toDateString(); 
            let diasemana = fecha.split(' ')[0]; 
            let tiempo = constFecha.getHours();

            window.setTimeout(() => {
                alert(`Hoy es: ${diasemana} a las horas ${tiempo}. Nos vemos mañana`);
                console.log(`Hoy es: ${diasemana} a las horas ${tiempo}. Nos vemos mañana`);
            }, convertir);
    hasmap.set(`iteracion:${clave}`,`cuenta atras ${aux} , tiempo de espera ${convertir}`);
            aux = 0 ; 
            clave += 1;

             
        }
         


    }, 1000);

            console.log(hasmap); 

});
