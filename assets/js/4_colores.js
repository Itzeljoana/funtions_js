
function pintar(id){
    const elemento = document.getElementById(id)
    if(elemento){
        elemento.style.backgroundColor = 'black';
    } 
}

document.getElementById('c_blue').addEventListener('click', function() {
    pintar('c_blue');
  });
  document.getElementById('c_red').addEventListener('click', function() {
    pintar('c_red');
  });
  document.getElementById('c_green').addEventListener('click', function() {
    pintar('c_green');
  });
  document.getElementById('c_yellow').addEventListener('click', function() {
    pintar('c_yellow');
  });

/*CAMBIO DE COLOR  TRAVES DE LA TECLAS */

var teclaPinta = function (color){
    return color; 
}

function pinta(color) {
    const elementos = document.querySelectorAll('.cambioTecla');
    
    elementos.forEach(function (elemento) {
        elemento.style.backgroundColor = teclaPinta(color);
    });
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pinta('pink');
    } else if (event.key === 's') {
        pinta('orange');
    } else if (event.key === 'd') {
        pinta('purple');
    }
});
/*DIV CON BORDE Y  CAMBIAR EL COLOR A TRAVES DE TECLA / CREAR DIV */
const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'purple';
    } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        createDiv(event.key);
    } 
});

function createDiv(tecla){
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className= 'key-div';

    let color;
    if(tecla==='q'){
        color='purple';
    } else if (tecla==='w'){
        color ='gray';
    } else if (tecla==='e'){
        color="brown";
    }
    nuevoDiv.style.backgroundColor =color;
    document.body.appendChild(nuevoDiv);
}

