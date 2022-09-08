// APP LISTA DE TAREAS
// Defino un array vacio para luego pushear segun se requiera

const tareas = [];

// Clase constructora para determinar los valores que tendra cada tarea
class Tarea {
    constructor(titulo, descripcion, fecha) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    
}

// Funcion para generar una nueva tarea basada en la clase constructora

function addWork (){
let newWork = new Tarea (prompt("ingresar titulo de la tarea") , prompt("ingresar descripcion de la tarea") , prompt("ingresar fecha de la tarea"));
return newWork;
}

// Iteracion para definir 3 tareas y agregarlas al Array simultaneamente

for (let i=0 ; i<3 ; i++) {
    tareas.push(addWork());
    const tareasID = tareas.length;
    alert(`Su tarea numero ${tareasID} fue creada!`);
}

// Muestro array de tareas

console.log(tareas);

// Pregunto al usuario si quiere eliminar una tarea

const deleteWork = () => {
    let spliceWork = prompt(`Desea eliminar una tarea? \Ingrese SI o NO :`);
    if ((spliceWork.toLowerCase() == "si") && (spliceWork != "")) {
        let spliceNumber = prompt(`Que tarea desea borrar? 1, 2, o 3 ?:`);
        if (spliceNumber == 1) {
            tareas.splice(0,1);
            alert(`Tarea eliminada`);
        } else if (spliceNumber == 2) {
            tareas.splice(1,1);
            alert(`Tarea eliminada`);
        } else if (spliceNumber == 3) {
            tareas.splice(2,1);
            alert(`Tarea eliminada`);
        } else {
            alert(`Ninguna tarea fue borrada`);
        }
    }
}

// Ejecuto funcion para borrar una tarea

deleteWork();

// Muestro array de tareas

console.log(tareas);

// Funcion para añadir tarea mediante un boton

function clickButtonWork () {
    const input = document.querySelector("#inputWork");
    valueInput = input.value;
    const modal = document.querySelector("#divModal");
    modal.innerHTML= modal.innerHTML+`<div class="card">
    <div class="card-body">
     Recuerda ${valueInput} !
    </div>
  </div>`;
}


const buttonWork = document.querySelector("#newWorkButton");
buttonWork.addEventListener("click", clickButtonWork);







