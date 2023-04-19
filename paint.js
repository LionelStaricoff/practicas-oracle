let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);


//evento: se refiere al mouse cuando hace click
//esta funcion indica en que jugar de la pantalla hace click el mouse
function exibirAlerta(evento){
    let x = evento.pageX - pantalla.offsetLeft; //resta de la pantalla lo que no pertenece al canvas del lado izquierdo como el margin
    let y = evento.pageY - pantalla.offsetTop;
    alert(x + ", " + y);
}


function dibujarCirculo(evento){
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*Math.PI);
    pincel.fill();
   // console.log(x + ", "+y);

}

function borrarPantalla(){
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400);

}

let btnBorrar = document.querySelector("#borrar");
btnBorrar.onclick = borrarPantalla;

pantalla.onclick = dibujarCirculo;