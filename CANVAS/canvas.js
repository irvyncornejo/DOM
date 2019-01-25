var d = document.getElementById('dibujito');//tenemos el objeto dibujito canvas
var lienzo = d.getContext('2d'); //Se obtiene el objeto en 2 dimensiones y el contexto 2d

function dibujarLinea(color,xinicio,yinicio,xfinal,yfinal) {
  lienzo.beginPath();//arrancar un trazo
  lienzo.strokeStyle = color;//color de la línea, atributo del objeto lienzo
  lienzo.moveTo(xinicio,yinicio);// mover en (x,y) para arrancar con el punto de inicio
  lienzo.lineTo(xfinal,yfinal);// realizar una linea que llegue hasta 200,200
  lienzo.stroke();//hacer la línea
  lienzo.closePath();//cerrrar la línea

}

dibujarLinea('gray',0,0,300,300);
dibujarLinea('blue',300,0,300,300);
dibujarLinea('red',300,300,0,300);
