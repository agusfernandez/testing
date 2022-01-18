const obtenerInformation=(materia)=>{
    let materias={
        fisica:["Lopez", "marina", "lucas", "pedro" , "sol"],
        matematica:["Fernandez","pedro", "marcos", "pablo" , "cofla"],
        lengua:["Marques","lucas", "mariano", "pepe" , "luciano"],
        programacion:["Silvio","cofla", "marcelo", "marcos" , "pedro"]
    }

    if(materias[materia] !== undefined){
        //me devuelceun array con dos posiciones [materias[materia]] => posicion 0 /// materia => posicion 1
        return [materias[materia], materia, materias];
    } else{
        return materias;
    }
}

const mostrarInfo =(materia)=>{
    console.log(materia);
    let informacion = obtenerInformation(materia);
    console.log("informacion" +informacion);
    if(informacion !== false){
        //for para devernos las clases y los profesores (primer elemento del array) // 
        let profesor= informacion[0][0];
        console.log(profesor);
        let alumnos=informacion[0];
        // des esta forma elimina el primerl elemento del array (profesor) para devolvernos el resto
        alumnos.shift();
        // me devuelve el valor de la materia por eso posicion1 del array de arriba
        console.log(`El profesor de la materia:<b>${informacion[1]}<b>, es ${profesor}  y los alumnos son<b style="color:red"> ${alumnos}</b>`)
    }

}

const cantidadDeClases=(alumno)=>{
    let informacion = obtenerInformation();
    let clasesPresentes=[];
    let cantidadTotal=0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push[info];
        } 
    }
    return cantidadTotal;
}

let mostrar1=mostrarInfo("fisica");

console.log(cantidadDeClases("luciano"));