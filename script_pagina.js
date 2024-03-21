var OtraImagen = document.getElementById("otraImagen");
var TextoDeImagen = document.getElementById("texto_seccionn");
var TituloImagen = document.getElementById("tituloImagenes");
var TextoImagen = document.getElementById("textoImagenes");

var imagen_1 = document.getElementById(`imagen1`)
var imagen_2 = document.getElementById(`imagen2`)
var imagen_3 = document.getElementById(`imagen3`)
var imagen_4 = document.getElementById(`imagen4`)

function cambiarImagen(imagenSeleccionada){
    var imagenes = document.getElementsByClassName("imagen"); 
    for(var i=0; i<imagenes.length;i++){
        imagenes[i].style.transition = "opacity 0.5s"
        imagenes[i].style.opacity = 0;
        imagenes[i].style.display ="none";
    };
    /*mostarr 5ta imagen*/
    OtraImagen.style.display = "block";
    OtraImagen.style.top = "5%";
    OtraImagen.src = imagenSeleccionada.src ;

    /*cambiar texto*/
    if(OtraImagen.src === imagen_1.src ){
        TituloImagen.textContent = `Limpia Parabrisas`
    }
    else if(OtraImagen.src === imagen_2.src ){
        TituloImagen.textContent = `Limpia Parabrisas`
    }
    else if(OtraImagen.src === imagen_3.src ){
        TituloImagen.textContent = `Electro Ventilador`
    }
    else if(OtraImagen.src === imagen_4.src ){
        TituloImagen.textContent = `Electro Ventilador`
    }
}

function QuitarImagen(quitar){
    var imagenes = document.getElementsByClassName("imagen"); 
    for(var i=0; i<imagenes.length;i++){
        imagenes[i].style.opacity = 1;
        imagenes[i].style.display ="block";
    };
        /*ocultar 5ta imagen*/
    OtraImagen.style.display = "none";
}