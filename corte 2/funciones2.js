 function convertirTexto() {
   let texto=document.querySelector("#texto").value
    console.log(texto)

   let contenedor=document.querySelector("#contenedor")

   contenedor.innerHTML= mayusculas(texto);
   console.log("longitud", ContarLongitud(texto));
   console.log("TercerCaracter",ObtenerCaracter(texto,2)); 
   console.log("Extracion", Extraer(texto));
   console.log("remplazar", Remplazar(texto));
   console.log("palabras", Dividir(texto));
}

function mayusculas(txt) {
    return txt.toUpperCase();

}


function ContarLongitud(texto){
    return texto.length;
}

function ObtenerCaracter(txt,posicion)
{

    if(txt.charAt(posicion)==""){
        return "No existe";
    }
    else{
        return txt.charAt(posicion);
    }        

}

function Extraer(txt){
    return txt.substring(2,5)
}

function Remplazar(txt){
    return txt.replace("martes","viernes")
}

function Dividir(txt){
    return txt.split(" ")
}