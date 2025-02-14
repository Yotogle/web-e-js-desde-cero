
let frutas =[
    {
        nombre : "fresa",
        color : "rojo",
        sabor : "acido"
    },

    {
        nombre : "mango",
        color : "amarillo",
        sabor : "dulce"
    },   

    {
        nombre : "kiwi",
        color : "verde",
        sabor : "acido"
    },

    {
        nombre : "sandia",
        color : "rojo",
        sabor : "dulce"
    },

    {
        nombre : "cereza",
        color : "rojo",
        sabor : "dulce"
    },

    {
        nombre : "uva",
        color : "morado",
        sabor : "dulce"
    }
]

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}. ${frutas[i].nombre}`)   
}


console.log("Las frutas rojas y dulces son: ")

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].color == "rojo" && frutas[i].sabor == "dulce") {
        console.log(`${i+1}. ${frutas[i].nombre}`)
    }   
}