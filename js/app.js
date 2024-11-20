function agregarTarea() {

    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;


    if (nuevaTareaTexto.trim() === "") {
        alert("Por favor, ingrese una tarea 🙀");
        return;
    }

    
    let nuevaTarea = document.createElement("li");

  
    let textoTarea = document.createElement("span");
    textoTarea.textContent = nuevaTareaTexto;


    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
    };


    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.onclick = function () {
      
        let nuevoTexto = prompt("Edita la tarea 😽:", textoTarea.textContent);

        
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            textoTarea.textContent = nuevoTexto.trim();
        } else {
            alert("El texto de la tarea no puede estar vacío 😾.");
        }
    };


    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);
    nuevaTarea.appendChild(botonEditar);


    document.getElementById("listaTareas").appendChild(nuevaTarea);

 
    document.getElementById("nuevaTarea").value = "";
}
