let cartas=[
    "Mago oscuro","Heroe Elemental Neos","Dragón de Ojos Anomalos","Dragon Blanco de Ojos Azules","Mahad el Oráculo Paladio","Mago Silencioso","Dinomorfia Kentregina","Espejade el Dragón Hoja de Hielo","Kuriboh","Dragoon Oscuro de Ojos Rojos",
    "Obelisco el atormentador", "El Dragon Alado de Ra", "Slifer El Dragon de los Cielos", "Dragonmaid Sheou", "Lavandería Dragonmaid", "I:P Masquerena", "Oso Atemorizante", "Edge Imp Sabres", "HÉROE del Destino - Plasma", "HÉROE del Destino - Dogma"  
]




function mostrarcartas() 
{   
    for (let i=0 ; i < cartas.length; i++ ) 
    {
        let carta= cartas[i];
        let contenedor=document.querySelector("#cartas");
        let li=document.createElement("li");
        li.textContent= carta;
        contenedor.appendChild(li);
    }
}

mostrarcartas();

let cartas2 = [

    {
        "Nombre":"Mago oscuro",
        "Imagen":"https://i.pinimg.com/474x/3c/18/2e/3c182e3e864f30efeecf158e32bf013c.jpg",
        "Tipocarta":"Monstruo Normal",
        "Nivel":"7",
        "Atributo":"Oscuridad",
        "Tipo":"Lanzador de Conjuros",
        "Efecto":"El más grande de los magos en cuanto al ataque y la defensa",
        "ATK":"2500",
        "DEF":"2100"
    },

    {
        "Nombre":"Heroe Elemental Neos",
        "Imagen":"https://p4.wallpaperbetter.com/wallpaper/661/137/165/anime-trading-card-games-yu-gi-oh-yu-gi-oh-gx-elemental-hero-neos-hd-wallpaper-preview.jpg",
        "Tipocarta":"Monstruo Normal",
        "Nivel":"7",
        "Atributo":"Luz",
        "Tipo":"Guerrero",
        "Efecto":"¡Un nuevo HÉROE Elemental ha llegado desde el Neo Espacio! Cuando inicia una Fusión de Contacto con un Neo Espacial sus desconocidos poderes son liberados",
        "ATK":"2500",
        "DEF":"2000"
    },

    {
        "Nombre":"Dragón de Ojos Anomalos",
        "Imagen":"https://i.pinimg.com/originals/38/45/64/38456473b5961946383d47f694ca0039.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"7",
        "Atributo":"Oscuridad",
        "Tipo":"Dragon",
        "Efecto":"Si esta carta destruye un monstruo de tu adversario en batalla y lo manda al Cementerio: inflige daño a tu adversario igual a la mitad del ATK original de ese monstruo en el Cementerio",
        "ATK":"2500",
        "DEF":"2000"
    },


    {
        "Nombre":"Dragon Blanco de Ojos Azules",
        "Imagen":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02937fcf-ff19-4573-8331-1b848e7532e1/ddoa66n-9b9cf9be-981a-4f64-921b-2645ff3fa003.jpg/v1/fill/w_1280,h_1762,q_75,strp/dragon_blanco_de_ojos_azules___fan_art_by_zeohaiver1art_ddoa66n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOTM3ZmNmLWZmMTktNDU3My04MzMxLTFiODQ4ZTc1MzJlMVwvZGRvYTY2bi05YjljZjliZS05ODFhLTRmNjQtOTIxYi0yNjQ1ZmYzZmEwMDMuanBnIiwiaGVpZ2h0IjoiPD0xNzYyIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMDI5MzdmY2YtZmYxOS00NTczLTgzMzEtMWI4NDhlNzUzMmUxXC96ZW9oYWl2ZXIxYXJ0LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.KXlo7g4cN2o1wZCauqKFyIPC1IoZUbncEnxnUaJ_aZU",
        "Tipocarta":"Monstruo Normal",
        "Nivel":"8",
        "Atributo":"Luz",
        "Tipo":"Dragon",
        "Efecto":"Este legendario dragón es una poderosa máquina de destrucción. Virtualmente invencible, muy pocos se han enfrentado a esta impresionante criatura y han vivido para contarlo",
        "ATK":"3000",
        "DEF":"2500"
    
    },

    {
        "Nombre":"Mahad el Oráculo Paladio",
        "Imagen":"https://i.pinimg.com/originals/44/40/fa/4440fa0b92d9e81c1dfe003562034d33.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"7",
        "Atributo":"Luz",
        "Tipo":"Lanzador de Conjuros",
        "Efecto":"Cuando robas esta carta: puedes mostrar esta carta; Invócala de Modo Especial desde tu mano. Si esta carta batalla con un monstruo de OSCURIDAD, su ATK se duplica sólo durante el Damage Step. Si esta carta es destruida en batalla o por el efecto de una carta: puedes Invocar de Modo Especial, desde tu mano, Deck o Cementerio, 1 Mago Oscuro",
        "ATK":"2500",
        "DEF":"2100"
    },

    {
        "Nombre":"Mago Silencioso",
        "Imagen":"https://i.pinimg.com/originals/16/99/99/169999a6bff7c4c9b394a659cd8bb18f.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"4",
        "Atributo":"Luz",
        "Tipo":"Lanzador de Conjuros",
        "Efecto":"No puede ser Invocado de Modo Normal/Colocado. Debe ser Invocado de Modo Especial (desde tu mano) Sacrificando 1 monstruo de Tipo Lanzador de Conjuros, y no puede ser Invocado de Modo Especial de otra forma. Esta carta gana 500 ATK por cada carta en tu mano. Una vez por turno, durante el turno de cualquier jugador, cuando una Carta Mágica es activada: puedes negar la activación. Si esta carta es destruida en batalla, o si esta carta controlada por su dueño es destruida por el efecto de una carta de tu adversario: puedes Invocar de Modo Especial, desde tu mano o Deck, 1 monstruo Mago Silencioso, excepto Mago Silencioso, ignorando sus condiciones de Invocación",
        "ATK":"1000",
        "DEF":"1000"
    },

    {
        "Nombre":"Dinomorfia Kentregina",
        "Imagen":"https://static.wikia.nocookie.net/yugiohenespanol/images/5/57/Foto_reversi%C3%B3n_dinomorfia.jpg/revision/latest/scale-to-width/360?cb=20220215050242&path-prefix=es",
        "Tipo-carta":"Monstruo de Fusión",
        "Nivel":"6",
        "Atributo":"Oscuridad",
        "Tipo":"Dinosaurio",
        "Efecto":"2 monstruos Dinomorfia con nombres diferentes Pierde ATK igual a tus LP. Sólo puedes usar cada uno de los siguientes efectos de Dinomorfia Kentregina una vez por turno. Durante la Main Phase (Efecto Rápido): puedes pagar la mitad de tus LP y desterrar 1 Trampa Normal Dinomorfia en tu Cementerio; este efecto se convierte en el efecto de esa Trampa cuando esa carta es activada. Si esta carta es destruida en batalla o por el efecto de una carta: puedes Invocar de Modo Especial 1 monstruo Dinomorfia de Nivel 4 o menor desde tu Cementerio",
        "ATK":"4000",
        "DEF":"0"
    },

    {
        "Nombre":"Espejade el Dragón Hoja de Hielo",
        "Imagen":"https://static.wikia.nocookie.net/yugiohenespanol/images/4/4c/Foto_espejade_el_drag%C3%B3n_hoja_de_hielo.jpg/revision/latest/scale-to-width-down/350?cb=20220801191408&path-prefix=es",
        "Tipocarta":"Monstruo de Fusión",
        "Nivel":"8",
        "Atributo":"Oscuridad",
        "Tipo":"Wyrm",
        "Efecto":"Caído de Albaz + 1 Monstruo de Fusión, Sincronía, Xyz o Enlace Sólo puedes controlar 1 Espejade el Dragón Hoja de Hielo. Una vez por turno Efecto Rápido: puedes mandar al Cementerio 1 Monstruo de Fusión en tu Deck Extra que mencione Caído de Albaz como material; destierra 1 monstruo en el Campo, y además el próximo turno esta carta no puede usar este efecto. Si esta carta Invocada por Fusión controlada por su dueño deja el Campo a causa de una carta del adversario: puedes destruir todos los monstruos que controle tu adversario durante la End Phase de este turno.",
        "ATK":"3000",
        "DEF":"2500"
    },

    {
        "Nombre":"Kuriboh",
        "Imagen":"https://s1.zerochan.net/Kuriboh.600.2795922.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"1",
        "Atributo":"Oscuridad",
        "Tipo":"Demonio",
        "Efecto":"Durante el cálculo de daño, si el monstruo de tu adversario ataca (Efecto Rápido): puedes descartar esta carta; no recibes daño de batalla de esa batalla",
        "ATK":"300",
        "DEF":"200"
    },

    {
        "Nombre":"Dragoon Oscuro de Ojos Rojos",
        "Imagen":"https://i.pinimg.com/originals/99/bb/a2/99bba2e97787428e9a888709e7f0ae0d.jpg",
        "Tipocarta":"Monstruo de Fusión",
        "Nivel":"8",
        "Atributo":"Oscuridad",
        "Tipo":"Lanzador de Conjuros",
        "Efecto":"Mago Oscuro + Dragón Negro de Ojos Rojos o 1 Monstruo de Efecto Dragón. No puede ser destruido por efectos de cartas. Ningún jugador puede seleccionar esta carta con efectos de cartas. Durante tu Main Phase: puedes destruir 1 monstruo que controle tu adversario y, si lo haces, inflige daño a tu adversario igual al ATK original de ese monstruo. Puedes usar este efecto hasta un número de veces por turno como el número de Monstruos Normales usados como Material de Fusión para esta carta. Una vez por turno, cuando es activada una carta o efecto (Efecto Rápido): puedes descartar 1 carta; niega la activación y, si lo haces, destruye esa carta y, si haces eso, esta carta gana 1000 ATK.",
        "ATK":"3000",
        "DEF":"2500"
    },

    {
        "Nombre":"Obelisco el atormentador",
        "Imagen":"https://w0.peakpx.com/wallpaper/40/705/HD-wallpaper-obelisk-the-tormentor-manga-yu-gi-oh-monsters-artwork-yu-gi-oh-the-dark-side-of-dimensions-yu-gi-oh-characters.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"10",
        "Atributo":"Divinidad",
        "Tipo":"Bestia divina",
        "Efecto":"Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Ningún jugador puede seleccionar esta carta con efectos de cartas. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Puedes Sacrificar 2 monstruos; destruye todos los monstruos que controle tu adversario. Esta carta no puede declarar un ataque en el turno en el que este efecto es activado",
        "ATK":"4000",
        "DEF":"4000"
    },

    {
        "Nombre":"El Dragon Alado de Ra",
        "Imagen":"https://images4.alphacoders.com/126/1266639.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"10",
        "Atributo":"Divinidad",
        "Tipo":"Bestia divina",
        "Efecto":"No puede ser Invocado de Modo Especial. Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar otras cartas ni efectos. Cuando esta carta es Invocada de Modo Normal: puedes pagar LP hasta que sólo te queden 100; esta carta gana ATK/DEF iguales a la cantidad de LP pagados. Puedes pagar 1000 LP, y después seleccionar 1 monstruo en el Campo; destruye ese objetivo.",
        "ATK":"?",
        "DEF":"?"
    },

    {
        "Nombre":"Slifer El Dragon de los Cielos",
        "Imagen":"https://p4.wallpaperbetter.com/wallpaper/383/436/1019/anime-trading-card-games-yu-gi-oh-slifer-the-sky-dragon-artwork-hd-wallpaper-preview.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"10",
        "Atributo":"Divinidad",
        "Tipo":"Bestia divina",
        "Efecto":"Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Gana 1000 ATK/DEF por cada carta en tu mano. Si uno o más monstruos son Invocados de Modo Normal o Especial al Campo de tu adversario en Posición de Ataque: ese o esos monstruos pierden 2000 ATK y después, si su ATK quedó reducido a 0 como resultado, destrúyelos",
        "ATK":"x000",
        "DEF":"x000"
    },

    {
        "Nombre":"Dragonmaid Sheou",
        "Imagen":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c82357ac-d545-43cd-8754-b104c6d26655/df5sxfv-0a8c7a0d-3eb0-4a84-94e3-9d8e92a6c32c.jpg/v1/fill/w_1280,h_721,q_75,strp/dragonmaid_sheou_by_playfurry_df5sxfv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvYzgyMzU3YWMtZDU0NS00M2NkLTg3NTQtYjEwNGM2ZDI2NjU1XC9kZjVzeGZ2LTBhOGM3YTBkLTNlYjAtNGE4NC05NGUzLTlkOGU5MmE2YzMyYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.C6vKa1B22J_wgW9lA8KufawDvSU-6BZnSchk8A-2F4Y",
        "Tipocarta":"Monstruo de Fusión",
        "Nivel":"10",
        "Atributo":"Luz",
        "Tipo":"Dragón",
        "Efecto":"1 monstruo Dragonmaid + 1 monstruo Dragón de Nivel 5 o mayor. Durante cada Standby Phase: puedes Invocar de Modo Especial 1 monstruo Dragonmaid de Nivel 9 o menor desde tu mano o Cementerio. Cuando tu adversario activa una carta o efecto (Efecto Rápido): puedes negar la activación y, si lo haces, destruye esa carta, además, después de eso, devuelve esta carta al Deck Extra y, si lo haces, Invoca de Modo Especial 1 Casa Dragonmaid de tu Extra Deck. Solo puedes usar cada efecto de Dragonmaid Sheou una vez por turno",
        "ATK":"3500",
        "DEF":"2000"
    },

    {
        "Nombre":"Lavandería Dragonmaid",
        "Imagen":"https://img-9gag-fun.9cache.com/photo/aegqemv_460s.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"2",
        "Atributo":"Agua",
        "Tipo":"Dragón",
        "Efecto":"Si esta carta es Invocada de Modo Normal o Especial: puedes mandar al Cementerio las 3 cartas de la parte superior de tu Deck. Al comienzo de la Battle Phase: puedes devolver esta carta a la mano y, si lo haces, Invoca de Modo Especial, desde tu mano o Cementerio, 1 monstruo Dragonmaid de Nivel 7. Solo puedes usar cada efecto de Lavandería Dragonmaid una vez por turno",
        "ATK":"500",
        "DEF":"1600"
    },

    {
        "Nombre":"I:P Masquerena",
        "Imagen":"https://w.wallha.com/ws/13/NE7gUt9q.jpg",
        "Tipocarta":"Monstruo de Enlace",
        "Nivel":"2",
        "Atributo":"Oscuridad",
        "Tipo":"Ciberso",
        "Efecto":"2 Monstruos que no sean de Enlace. Durante la Main Phase de tu adversario, puedes (Efecto Rápido): Inmediatamente después de que se resuelva este efecto, Invocar por Enlace 1 Monstruo de Enlace usando materiales que controlas, incluida esta carta. Solo puedes usar este efecto de I:P Masquerena una vez por turno. Un Monstruo de Enlace que usó esta carta como material no puede ser destruido por efectos de cartas de tu adversario.",
        "ATK":"800",
        "DEF":"0"
    },

    {
        "Nombre":"Oso Atemorizante",
        "Imagen":"https://static.wikia.nocookie.net/yugiohenespanol/images/e/e2/Foto_renacido_atemorizante.jpg/revision/latest/scale-to-width-down/250?cb=20180303091734&path-prefix=es",
        "Tipocarta":"Monstruo de Fusión",
        "Nivel":"6",
        "Atributo":"Oscuridad",
        "Tipo":"Demonio",
        "Efecto": "Edge Imp Sabres + Fluffal Bear Cuando esta carta destruye un monstruo de tu oponente en batalla y lo manda al Cementerio: puedes equipar ese monstruo a esta carta como una Carta Mágica de Equipo con este efecto. El monstruo Equipado gana 1000 ATK.",
        "ATK":"2200",
        "DEF":"1800"
    },

    {
        "Nombre":"Edge Imp Sabres",
        "Imagen":"https://ms.yugipedia.com//thumb/f/fa/EdgeImpSabres-LOD2-JP-VG-artwork.png/275px-EdgeImpSabres-LOD2-JP-VG-artwork.png",
        "Tipocarta":"Monstruo de Efcto",
        "Nivel":"3",
        "Atributo":"Oscuridad",
        "Tipo":"Demonio",
        "Efecto":"Si esta carta está en tu Cementerio: puedes poner 1 carta de tu mano en la parte superior del Deck; Invoca esta carta de Modo Especial en Posición de Defensa. Solo puedes usar este efecto de Edge Imp Sabres una vez por turno",
        "ATK":"1200",
        "DEF":"800"
    },

    {
        "Nombre":"HÉROE del Destino - Plasma",
        "Imagen":"https://static.zerochan.net/Destiny.HERO.-.Plasma.full.3210160.png",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"8",
        "Atributo":"Oscuridad",
        "Tipo":"Guerrero",
        "Efecto":"No puede ser Invocado de Modo Normal/Colocado. Debe ser Invocado de Modo Especial (desde tu mano) Sacrificando 3 monstruos. Niega los efectos de los monstruos boca arriba mientras los controle tu adversario. Una vez por turno: puedes seleccionar 1 monstruo que controle tu adversario; equipa ese objetivo a esta carta (máx. 1). Gana ATK igual a la mitad del ATK original del monstruo equipado a ella por este efecto",
        "ATK":"1900",
        "DEF":"600"
    },

    {
        "Nombre":"HÉROE del Destino - Dogma",
        "Imagen":"https://i.pinimg.com/originals/db/4f/6c/db4f6c993b0e9d1c59d3a6f9d29b1398.jpg",
        "Tipocarta":"Monstruo de Efecto",
        "Nivel":"8",
        "Atributo":"Oscuridad",
        "Tipo":"Guerrero",
        "Efecto":"No puede ser Invocado de Modo Normal/Colocado. Debe ser Invocado de Modo Especial (desde tu mano) Sacrificando 3 monstruos, incluyendo al menos 1 monstruo HÉROE del Destino. Una vez por turno, si todavía controlas esta carta boca arriba durante la próxima Standby Phase de tu adversario después de que la Invocaste de Modo Especial de esta forma: divide a la mitad los LP de tu adversario",
        "ATK":"3400",
        "DEF":"2400"
    }



]

function buscarcartas()
{
    let contenedor=document.querySelector("#cartas-busqueda");
    let textbuscador=document.querySelector("#buscador").value;
    let acumulador="";
    cartas2.forEach(carta => {
        console.log(carta)
        if(carta.Nombre.toLowerCase().startsWith(textbuscador.toLowerCase()) && textbuscador !== "")
        {
            acumulador = acumulador+ `<img src="${carta.Imagen}" width="400"/><h3>${carta.Nombre}</h3> 
            <h3>Tipo-carta: ${carta.Tipocarta}</h3>
            <h3>Nivel: ${carta.Nivel}</h3>
            <h3>Atributo: ${carta.Atributo}</h3>
            <h3>Tipo: ${carta.Tipo}</h3>
            <h3>Efecto: ${carta.Efecto}</h3>
            <h3>ATK: ${carta.ATK}</h3>
            <h3>DEF: ${carta.DEF}</h3>`;
        }

    });

    contenedor.innerHTML=acumulador;
}
    
