let animales=[
    "Jirafa","perro","gato","pato","ganzo","escorpion","leon","puma","oso","oso polar",
    "Hormiga","Caimán","Camaleón","Conejo","Pingüino","Cabra","Víbora","Toro","Koala","Mono"
]




function mostraranimales() 
{   
    for (let i=0 ; i < animales.length; i++ ) 
    {
        let animal= animales[i];
        let contenedor=document.querySelector("#animales");
        let li=document.createElement("li");
        li.textContent= animal;
        contenedor.appendChild(li);
    }
}

mostraranimales();

let animales2 = [

    {
        "nombre":"gato",
        "imagen":"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
        "pesoPromedio":"4 kg",
        "numerodepatas":"4",
        "colorpromedio":"Cafe claro",
        "alimentación":"Carne,comida para gatos",
        "habitad":"Apartamento,etc"
    },

    {
        "nombre":"Jirafa",
        "imagen":"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/07/25/16587364796912.jpg",
        "pesoPromedio":"800 - 1900 kg",
        "numerodepatas":"4",
        "colorpromedio":"Amarilla con manchas cafes",
        "alimentación":"Plantas de acacia",
        "habitad":"Sabana, pastizales y bosques abiertos."
    },

    {
        "nombre":"perro",
        "imagen":"https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg",
        "pesoPromedio":" 5 a 25 kilos",
        "numerodepatas":"4",
        "colorpromedio":"Blanco",
        "alimentación":"Comida para perros",
        "habitad":"Domestico"
    },


    {
        "nombre":"pato",
        "imagen":"https://www.partesdel.com/wp-content/uploads/Partes-del-Pato.....jpg",
        "pesoPromedio":"450 g",
        "numerodepatas":"2",
        "colorpromedio":"Blanco, Gris y Cafe",
        "alimentación":"plantas, semillas, algas, insectos como caracoles, babosas y lombrices, pequeños peces",
        "habitad":"marinos o de agua dulce"
    },

    {
        "nombre":"escorpion",
        "imagen":"https://t1.ev.ltmcdn.com/es/posts/1/0/4/tipos_de_escorpiones_3401_orig.jpg",
        "pesoPromedio":" 30 g",
        "numerodepatas":"6",
        "colorpromedio":"Negro",
        "alimentación":"insectos y otros invertebrados, aunque algunas especies consumen vertebrados",
        "habitad":"regiones tropicales y subtropicales del mundo"
    },

    {
        "nombre":"leon",
        "imagen":"https://www.bioenciclopedia.com/wp-content/uploads/2011/12/leon-800.jpg",
        "pesoPromedio":"190 kg",
        "numerodepatas":"4",
        "colorpromedio":"Naramja",
        "alimentación":"Carne",
        "habitad":"sabanas africanas y en una zona reducida del noreste de la India"
    },

    {
        "nombre":"puma",
        "imagen":"https://media.istockphoto.com/photos/puma-concolor-picture-id98215577?k=20&m=98215577&s=612x612&w=0&h=it4IiHCrFaM-BiNrj0tGa97TtLvxoUlH8tQFog-VwrY=",
        "pesoPromedio":"53 - 109 kg",
        "numerodepatas":"4",
        "colorpromedio":"Gris tirando a amarillo",
        "alimentación":"Carne",
        "habitad":"altas montañas, como a las áreas secas y desérticas o a la sabana"
    },

    {
        "nombre":"Víbora",
        "imagen":"https://www.animales.website/wp-content/uploads/2018/03/V%C3%ADbora.jpg",
        "pesoPromedio":"250 g",
        "numerodepatas":"0",
        "colorpromedio":"cafes",
        "alimentación":"Carne",
        "habitad":"la tierra, como el agua dulce y salobre"
    },

    {
        "nombre":"oso",
        "imagen":"https://img.huffingtonpost.com/asset/605df9e5270000b81ac84792.jpg?cache=Lr3r7kdtFz&ops=1778_1000",
        "pesoPromedio":"80 - 600 kg",
        "numerodepatas":"4",
        "colorpromedio":"Cafe",
        "alimentación":" vegetación incluyendo rebaños, pastó, raíces, yemas, brotes, miel, Fruta, bayas y semilla. Ocasionalmente, ellos se comen peces pequeños mamíferos, insectos, carrion, y basura",
        "habitad":"Eurasia y América del Norte, en las montañas Atlas del norte de África y en los Andes de América del Sur"
    },

    {
        "nombre":"Hormiga",
        "imagen":"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IK3AZZADIJDQFD5S2YJ2Z2CWLY.jpg","pesoPromedio":"",
        "numerodepatas":"1 - 2 miligramos",
        "colorpromedio":"Roja",
        "alimentación":"Se alimentan de plantas (herbívo- ras), pero otras se alimentan de animales vivos (depre- dadoras), animales muertos o materia orgánica en des- composición (detritívoras), mientras que otras comen un poco de todo (omnívoras).",
        "habitad":" viven en casi todos los rincones del planeta, especialmente los bosques, prados y montañas"
    }



]

function buscaranimales()
{
    let contenedor=document.querySelector("#animales-busqueda");
    let textbuscador=document.querySelector("#buscador").value;
    let acumulador="";
    animales2.forEach(animal => {
        console.log(animal)
        if(animal.nombre.toLowerCase().startsWith(textbuscador.toLowerCase()) && textbuscador !== "")
        {
            acumulador = acumulador+ `<img src="${animal.imagen}" width="400"/><h3>${animal.nombre}</h3> 
            <h3>${animal.numerodepatas}</h3>
            <h3>${animal.colorpromedio}</h3>
            <h3>${animal.alimentación}</h3>
            <h3>${animal.habitad}</h3>`;
        }

    });

    contenedor.innerHTML=acumulador;
}
    
