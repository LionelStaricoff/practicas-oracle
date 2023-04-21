let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);


function diseniarcirculo(x,y,radio,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function borrarPantalla(){
   
   pincel.fillStyle = "grey";
   pincel.fillRect(0,0,600,400);

}

var radio = 10;
//creamos el blanco
function diseniarBlanco(x,y, radio){
diseniarcirculo(x,y,radio+20,"red");
diseniarcirculo(x,y,radio+10,"white");
diseniarcirculo(x,y,radio,"red");
}

function sortearPosicion(maximo){
    return Math.floor(Math.random()*maximo);
}

var xAleatorio;
var yAleatorio;
function actuaizarPantalla(){
    borrarPantalla();
 xAleatorio = sortearPosicion(600);
 yAleatorio = sortearPosicion(400);

diseniarBlanco(xAleatorio,yAleatorio,radio);
}

function disparar(evento){
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;

  if( (x < xAleatorio + radio) &&
  (x > xAleatorio - radio)&&
  (y < yAleatorio + radio)&&
  (y > yAleatorio - radio) ){
  
    alert("tiro certero")
  }
}

setInterval(actuaizarPantalla,1000);


pantalla.onclick = disparar;