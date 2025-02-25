
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];


let comentar = (event) => {
    event.preventDefault(); 
    const textoComentario = inputComment.value.trim(); 

    if (textoComentario !== "") {
       
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");

        
        const texto = document.createElement("p");
        texto.textContent = textoComentario;
        nuevoComentario.appendChild(texto);

        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.onclick = () => eliminarComentario(nuevoComentario); 
        nuevoComentario.appendChild(btnEliminar);

       
        boxComments.appendChild(nuevoComentario);

    
        inputComment.value = "";
    } else {
        alert("Por favor, escribe un comentario válido.");
    }
};

function eliminarComentario(comentario) {
    comentario.remove(); 
}

btnComment.addEventListener("click", comentar);