// alert("hola");

document.write("Escuela Artes y Letras");

// PARA COLOCAR EN LA CONSOLA
console.log("Martes 13");

// let "string"
let nombre="Camilo Mora";

// obtener el elemneto "cuadro1"
// document.getElementById("cuadro1").innerHTML="Camilo Mora"

document.getElementById("cuadro1").innerHTML="nombre";

let name=prompt ("porfavor escriba su nombre");


let age=prompt ("Escriba su edad")
// alert("en diez años tendra "+ age);

let edadfutura=Number(age)+10;

// recomendable utilizar el numbre

let edadantigua=Number(age)-5;

let tripleedad=Number(age)*3;

let mitadedad=Number(age)/2;



alert("Hola "+ name + " en 10 años tendra " + edadfutura + " ,hace 5 años tenias " + edadantigua + " ,el triple de su edad es " + tripleedad + " y la mitad de su edad seria " + mitadedad);

// para igualar
if(age % 2==0){
    alert("es par")
}
else{
    alert("es inpar")
}

// diferente

if(age >= 22){
    alert("es mayor a 22 años")
}
else{
    alert("es menor a 22 años")
}


// clase 20/09/2022

// Array = una cajita para guardar cosas

// let colores= ["azul", "rojo", "negro", "blanco"] la compocición comienza desde 0

let colores= ["azul", "rojo", "negro", "blanco"]

colores[2] 
// va a salir el negro

let auto={
    "marca": "BMW",
    "llantas": 4,
    "circulación": true,
    "dueño": null
}

auto.llantas // =4

let autos=[

    {"marca":"audi"},
    {"marca":"chevrolet"}
]


let animales=[
    {
        "animales":"gato"
    },

    {
        "animales":"perro"
    },

    {
        "animales":"fenix"
    },

    {
        "animales":"pajaro"
    },

    {
        "animales":"pez"
    }
]

let pais=[

    {"nombre":"españa"},
    {"capital":"Madrid"},
    {"kilometros":8007},
    {"Idioma":"Español"},
    {"PIB":"1,281 billones USD"}

]
console.log(pais)

let artistas=[

    {
        "nombre":"Andres Cepeda",
        "nacionalidad":"Colombia",
        "Genero":"Pop-rock y pop" ,
        "canciones": [
            {"nombre": "Dejame-ir", "reproduciones":67000000},
            {"nombre": "Magia", "reproduciones":155000000},
            {"nombre": "Besos-usados", "reproduciones":1600000},
        ]
    },

    {
        "nombre":"Sebastián Yatra",
        "nacionalidad":"Colombia",
        "Genero":"Poplatino, balada, reguetón" ,
        "canciones": [
            {"nombre": "Traisionera", "reproduciones":567000000},
            {"nombre": "Robarte-un-beso ", "reproduciones":1553000000},
            {"nombre": "Un-año", "reproduciones":693000000},
        ]
    },

    {
        "nombre":"imagine-dragons",
        "nacionalidad":"Estados-unidos",
        "Genero":"Alternativa-independiente" ,
        "canciones": [
            {"nombre": "Radioactive", "reproduciones":1400000000},
            {"nombre": "Believer ", "reproduciones":2290000000},
            {"nombre": "Demons", "reproduciones":1012000000},
        ]
    }

]
console.log(artistas)