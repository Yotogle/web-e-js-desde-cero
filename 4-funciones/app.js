
let titulos = []

function agregarTitulo (titulo){
    titulos.push(titulo)
    return titulo
}
function mostrarLibrosLeidos (array){
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.- ${array[i]}`);
      }
}