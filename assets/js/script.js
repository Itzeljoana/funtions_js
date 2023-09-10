const elemento = document.getElementById("ele1");

function pintar(elementoClikeado, color){
    elementoClikeado.style.backgroundColor = color;   
}

pintar(elemento,'green');

elemento.addEventListener("click", function(){    
    pintar(elemento, 'yellow');
});
