let calificaciones = "4;7;10;8;6";
let conversion = calificaciones.split(";");

for(let i = 0 ; conversion.length ; i++ ){
        if(parseInt(conversion) <  3 ){
            console.log("Muy deficiente ");
        }else if(parseInt(conversion) < 5 ){
                console.log("Insuficiente")
        }else if (parseInt(conversion) < 6 ){
                console.log("Bien");
        }else if (parseInt(conversion) < 9 ){
                console.log("Notable");
        }else{
                console.log("Sobresaliente");
        }
}
