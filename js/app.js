function agregarTarea() {
    // Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    // Validamos que el valor no sea vacío
    if (nuevaTareaTexto.trim() === "") {
        alert("Por favor, ingrese una tarea");
        return;
    }

    // Crear elemento en la lista
    let nuevaTarea = document.createElement("li");

    // Crear el texto de la tarea dentro de un span (para facilitar su edición)
    let textoTarea = document.createElement("span");
    textoTarea.textContent = nuevaTareaTexto;

    // Crear botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
    };

    // Crear botón de editar
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.onclick = function () {
        // Solicitar nuevo texto para la tarea
        let nuevoTexto = prompt("Edita la tarea:", textoTarea.textContent);

        // Si el usuario no cancela y el texto no está vacío, actualizar
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            textoTarea.textContent = nuevoTexto.trim();
        } else {
            alert("El texto de la tarea no puede estar vacío.");
        }
    };

    // Agregar el texto y los botones al elemento de la lista
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);
    nuevaTarea.appendChild(botonEditar);

    // Agregar el elemento/la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";
}
