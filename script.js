import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del dom
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregaremos un evento click a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        //Remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        
        //AGREGAR ACTIV AL QUE CORRESPONDA
        
        this.classList.add('active')
        
        //Obtener el contenido correspondiente segun el enlace
        
        let contenido = obtenerContenido(this.textContent)
        
        
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//FUNCION OBTENER CONTENIDO

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres,
    };
    return contenido[enlace];
}