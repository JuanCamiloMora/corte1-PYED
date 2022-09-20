function validar()
{
    let checkboxP=document.getElementById("P").checked;
    console.log (checkboxP)

    let checkboxQ=document.getElementById("Q").checked;
    console.log (checkboxQ)


    // if(validar){

    //     let checkboxP=document.getElementById("P").checked;
    //     console.log (checkboxP)
    // }
    
    // else{
        
    //     let checkboxQ=document.getElementById("Q").checked;
    //     console.log (checkboxQ)
    // }

    let resultado="P AND Q es:" + (checkboxP && checkboxQ)+"<br>";

   
    
    resultado=resultado+"P OR Q es:"+ (checkboxP || checkboxQ)+"<br>";
    resultado=resultado+"La negación de P es: "+(!checkboxP)+"<br>";
    resultado=resultado+"La negación de Q es: "+(!checkboxQ)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
}

