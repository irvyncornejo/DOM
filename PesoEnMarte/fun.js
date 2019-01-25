
var g_tierra = 9.81;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = parseFloat(prompt('Ingresa tu peso'));
var peso_final;
// peso = prompt('Ingresa tu peso')
// var pesoInt = parseFloat(peso)
var planeta = prompt('Ingresa el planeta \n marte o jupiter')

  if (planeta === 'marte'){
      peso_final = parseFloat((peso * g_marte) / g_tierra).toFixed(3);
      // peso_final = parseFloat(peso_final).toFixed(3);
      // document.write(`Tu peso en ${planeta} es ${peso_final}`);
  }

  else if (planeta === 'jupiter'){
      // peso_final = (pesoInt * g_jupiter) / g_tierra;
      // peso_final = parseFloat(peso_final).toFixed(3);
      peso_final = parseFloat((peso * g_jupiter) / g_tierra).toFixed(3);

    }

  else {
    alert('Verifique los datos del planeta')
  }
// peso = prompt('Ingresa tu peso')
// var pesoInt = parseFloat(peso)// peso = prompt('Ingresa tu peso')
// var pesoInt = parseFloat(peso)
    document.write(`Tu peso en ${planeta} es ${peso_final} N`).toUpperCase();
// 
