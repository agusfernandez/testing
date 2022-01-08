let paseFree= false;

// paso el parametro tiempo
const validarPase = (time)=>{
    let edad= parseInt(prompt("¿Cual es tu edad"));
    if(edad>=18){
        if(time>=2 && time <7 && paseFree==false ){
            alert ("podes pasar tranqui capito");
            paseFree= true;

        } else {
            alert (`son las  ${time}:00 hs, podes pasar pero tenes que pagar`);
        }

    } else {
        alert ("No podes pasar, ya que sos menor de edad");
    }
}

validarPase(3);
validarPase(5);
validarPase(1);


