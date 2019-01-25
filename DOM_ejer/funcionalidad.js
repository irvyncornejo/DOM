// var base
// var caracter;
var triangulo = '';

function hacerTriangulo() {
var base = document.getElementById('base').value;
var caracter = document.getElementById('caracter').value;

  if(caracter === "" || caracter == null || caracter === ' '){
    alert('Ingrese el caracter')
  }
  else if (base < 0 || base == 0) {
    alert('El valor de la base no es valido');
  }
  else {
    for (var i = 0; i < base; i++) {
    triangulo += caracter
    console.log(triangulo);
    document.getElementById('triangulo').innerHTML +=`<p>${triangulo}</p>`
    }
  }
}

hacerTriangulo();
























      //
      // var triangulo = '';
      // var base = prompt('Ingresa la base')
      // var caracter = prompt('ingresa el caracter')
      //
      // // var base = 5;
      // // var caracter = '*';
      // // // function perdirDAtos() {
      // // //   var base1 = prompt("Ingrese la base")
      // // //     alert(base1);
      // //
      // // }
      //
      // function dibujarTriangulo() {
      //   if (base===null || base ==="") {
      //       alert('Ingrese el dato');
      //     }
      //
      //   else {
      //     for (var i = 0; i < base; i++) {
      //         triangulo+= caracter
      //         console.log(triangulo);
      //       }
      //   }
      //
      // }
      // dibujarTriangulo();
