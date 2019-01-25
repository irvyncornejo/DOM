var texto = document.getElementById('text_edad');
var btn = document.getElementById('boton_enviar');

btn.addEventListener('click',calcualarFecha); // le damos el nombre de la función, la estamos referenciando


function calcualarFecha() {
  var tex = parseInt(texto.value);
  // alert(`hey ${tex}`);
  // console.log(tex);
  var edad = 2018 - tex;
  document.getElementById('edad').innerHTML +=`<strong><p>El año en que naciste es ${edad}</p></strong>`

}
