
const userForm = document.getElementById("userForm");
const inputUsuario = document.getElementById("inputUsuario");
const btnGuardarUsuario = document.getElementById("btnGuardarUsuario");
const commentForm = document.getElementById("commentForm");
const inputComment = document.getElementById("inputComentario");
const boxComments = document.getElementsByClassName("comentarios")[0];

let usuario = "";


btnGuardarUsuario.addEventListener("click", function (event) {
    event.preventDefault();
    const nombreUsuario = inputUsuario.value.trim();
    if (nombreUsuario !== "") {
        usuario = nombreUsuario;
        userForm.style.display = "none"; // Ocultar formulario de usuario
        commentForm.style.display = "flex"; // Mostrar formulario de comentarios
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
});


function obtenerFechaHora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();
    return `${fecha} ${hora}`;
}

function agregarComentario(event) {
    event.preventDefault();
    const textoComentario = inputComment.value.trim();

    if (textoComentario !== "") {
    
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");

      
        const usuarioElement = document.createElement("p");
        usuarioElement.classList.add("usuario");
        usuarioElement.textContent = usuario;
        nuevoComentario.appendChild(usuarioElement);

      
        const texto = document.createElement("p");
        texto.textContent = textoComentario;
        nuevoComentario.appendChild(texto);

      
        const fechaElement = document.createElement("p");
        fechaElement.classList.add("fecha");
        fechaElement.textContent = obtenerFechaHora();
        nuevoComentario.appendChild(fechaElement);

       
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.onclick = () => nuevoComentario.remove();
        nuevoComentario.appendChild(btnEliminar);

        boxComments.appendChild(nuevoComentario);

      
        inputComment.value = "";
    } else {
        alert("Por favor, escribe un comentario válido.");
    }
}


commentForm.addEventListener("submit", agregarComentario);