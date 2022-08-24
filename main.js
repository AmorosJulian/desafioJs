// APP LISTA DE TAREAS
// Desafio complementario Arrays

const tareas = [];
let tarea

for(i=0 ; i<=10 ; i++) {
    if ((tareas.length <= 5) && (tarea != "")){
        tarea = prompt(`Ingrese una nueva tarea`);
        tareas.push(tarea);
        console.log(tarea); 
    } else if (tarea == "") {
        alert(`Ingresa una tarea por favor`);
        tarea = prompt(`Ingrese una nueva tarea`);
        continue;
    }
     else {
        alert(`Ya tenes muchas tareas pendientes`);
        break;
    }
    
}

let deleteTarea = prompt(`Tareas agendadas! ¿Queres eliminar la ultima tarea? Ingrese Si o No :`);

function eliminarTarea () {
    tareas.pop();
}

if (deleteTarea === "si") {
    eliminarTarea();
    alert(`Ultima tarea eliminada`);
} else {
    alert(`Ok, tareas programadas satisfactoriamente`);
}

console.log(`Estas son las tareas programadas: ${tareas}`);








