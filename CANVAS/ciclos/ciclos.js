
var d = document.getElementById('dibujito');//tenemos el objeto dibujito canvas
var lienzo = d.getContext('2d'); //Se obtiene el objeto en 2 dimensiones y el contexto 2d
var l=0;
var lineas = 30;
var yi0,xf0,yi1,xf1;
var colorcito = prompt('El color');

function dibujarLinea(color,xinicio,yinicio,xfinal,yfinal) {
  lienzo.beginPath();//arrancar un trazo
  lienzo.strokeStyle = color;//color de la línea, atributo del objeto lienzo
  lienzo.moveTo(xinicio,yinicio);// mover en (x,y) para arrancar con el punto de inicio
  lienzo.lineTo(xfinal,yfinal);// realizar una linea que llegue hasta 200,200
  lienzo.stroke();//hacer la línea
  lienzo.closePath();//cerrrar la línea

}

while(l < lineas){
  yi0 = l * 10;
  xf0 = 10 * (l + 1);
  yi1 = 300 - (l * 10);
  xf1 = 300 - 10 * (l + 1)
  dibujarLinea(colorcito,0,yi0,xf0,300);
  dibujarLinea(colorcito,300,yi1,xf1,0);
  l = l + 1;

}

// function esquinaInfIzquierda() {
//   while (l < 30 ) {
//     yi = l * 10;
//     xf = 10 * (l + 1);
//     dibujarLinea(colorcito,0,yi,xf,300);
//     // console.log(`El valor de l es ${l}`);
//     l = l+1;
//
//   }
// }
// function esquinaSupDerecha() {
//   // while (l < 30 )
//   for(l=0;l < lineas; l++){
//     yi = 300 - (l * 10);
//     xf = 300 - 10 * (l + 1)
//     dibujarLinea(colorcito,300,yi,xf,0);
//     // console.log(`El valor de l es ${l}`);
//     // l= l+1;
//   }
// }
//
// esquinaInfIzquierda();
// esquinaSupDerecha();

// function esquinaInfDerecha() {
//   while (l < 30 ) {
//     yi = l * 10;
//     xf = 300 - 10 * (l + 1)
//     dibujarLinea(colorcito,300,yi,xf,300);
//     console.log(`El valor de l es ${l}`);
//     l= l+1;
//   }
// }

// function esquinaSupIzquierda() {
//   while (l < 30 ) {
//     yi = 300 - (l * 10);
//     xf = 10 * (l + 1)
//     dibujarLinea(colorcito,0,yi,xf,0);
//     console.log(`El valor de l es ${l}`);
//     l= l+1;
//   }
// }
