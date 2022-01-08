let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos");
let alumnos = [];

//recoletcto la informacion de alumnos y nombres
for (let i= 0; i<cantidadAlumnos; i++){
    alumnos[i]=[prompt("Ingrese el nombre " + (i+1)), 0];
}

//funcion para evaluar presencia o ausencia 

const validarAsistencia =(nombre, pocisionLista)=>{
    let presenciaAlumno = prompt("presente o ausente " +nombre);
    if(presenciaAlumno == "p" || presenciaAlumno== "P"){
        // alumnos[p] ->accedo al primer array 
        // [1]  -> accedo al segundo elemento q es la presencia
         /*  si elijo tres nombre quedaaria
        juan, 1 (el segun elemento es la cantidad de asistencias osea relaciono nombre y asistencia)
        pedro, 2 */
        alumnos[pocisionLista][1]++;
    }

}

/* hago un bucle q corra 30 veces ya que necesito cotejar lo que pasa en 30 dias, y en el llamo ejecuto la funcion para que lo recorra 30 veces seguidos// y con el for in necesitamos la posicion */

for(let i=0; i<30; i++){
    for(alumno in alumnos){
        //nombre= alumnos[alumno]-> eso es la posicion. Osea necesito el primer parametro
        /* ejecuto la funcion de la validacion, y pienso de la cantidad de alumnos, le paso un alumno, q tiene el nombre y numero de asistencias pero solo el nombre vamos atomar por eso posicion 0, y p(qe esta como parametro) es la posicion de la lista osea alumno  */
        validarAsistencia(alumnos[alumno][0], alumno);
    }
}

/* escribimos el resultad */

for (alumno in alumnos){
    let resultado = `el nombre es: ${alumnos[alumno][0]}:</br>
    -presentes:  ${alumnos[alumno][1]}; </br>
    -ausentes: ${30 - parseInt(alumnos[alumno][1])};`;

    if(30 - alumnos[alumno][1]){
        resultado += "<p style='color:red'> reprobado por inasistencias</p>"
    } else{
        resultado += "</br> </br> </br>"
    }

    document.write(resultado);

}