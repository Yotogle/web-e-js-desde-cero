
const biblioteca = {
    titulo: "Una temporada en el infierno",
    autor: "Arthur Rimbaud",
    año: 1873,
    estado: "disponible",
    capitulos: [ "Une saison en efer", "Mauvais sang", "Nuit de l'enfer"],
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },
    eliminarCapitulo: function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`Capítulo "${capitulo}" no encontrado.`);
        }
    },

    listarCapitulos: function() {
        if (this.capitulos.length > 0) {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        } else {
            console.log("El libro no tiene capítulos aún.");
        }
    },
    describirLibro: function (){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, y se encuentra ${this.estado}.`
    }
};

console.log(biblioteca.describirLibro())
console.log(biblioteca.listarCapitulos())


/*
class libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }
}

const libro1 = new libro("Una temporada en el infierno", "Arthur Rimbaud", 1873, "disponible")
*/
