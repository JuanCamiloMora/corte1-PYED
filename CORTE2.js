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
