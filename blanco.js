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

//creamos el blanco
function diseniarBlanco(x,y){
diseniarcirculo(x,y,30,"red");
diseniarcirculo(x,y,20,"white");
diseniarcirculo(x,y,10,"red");
}

function sortearPosicion(maximo){
    return Math.floor(Math.random()*maximo);
}

function actuaizarPantalla(){
    borrarPantalla();
let xAleatorio = sortearPosicion(600);
let yAleatorio = sortearPosicion(400);

diseniarBlanco(xAleatorio,yAleatorio);
}

function disparar(evento){
  let x = evento.pageX - pantalla.offsetLeft;
  let x = evento.pageY - pantalla.offsetTop;

  
  
    alert("tiro certero")
}

setInterval(actuaizarPantalla,1000);


//pantalla.onclick = disparar;