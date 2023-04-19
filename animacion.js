let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);


function diseniarcirculo(x,y,radio){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function borrarPantalla(){
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400);

}

// x es la direccion de la pantalla para que se mueva haci la derecha
let x = 0;
function actuaizarPantalla(){
    borrarPantalla();
    diseniarcirculo(x,20,10);
    x++;
}

//funcion de js para hacer otras funciones con lapzo de tiempo
setInterval(actuaizarPantalla,200);