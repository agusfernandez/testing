let materias={
    fisica:["Lopez", "marina", "lucas", "pedro" , "sol"],
    matematica:["Fernandez","pedro", "marcos", "pablo" , "cofla"],
    lengua:["Marques","lucas", "mariano", "pepe" , "luciano"],
    programacion:["Silvio","cofla", "marcelo", "marcos" , "pedro"]
}


const inscripcion=(alumno, materia)=>{
    let personas=materias[materia];
    personas.shift();
    let alumnos = personas;
    if(alumno.length>=2){
        console.log(`lo siento ${alumno}, las clases de ${materia} estan llenos`);
    }
}

inscripcion("lucas", "lengua" );