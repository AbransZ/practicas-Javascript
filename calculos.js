var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");

var operacion = document.getElementById("operacion");
var respuesta = document.getElementById("resultado1");
var resultado;
var btncalcular = document.getElementById("calculo");

function calcu() {
  var num1 = parseFloat(op1.value);
  var num2 = parseFloat(op2.value);

  if ( !isNaN(num1) && !isNaN(num2) ) {
    switch (operacion.value) {
      case "suma":
        suma(num1, num2);
        break;
      case "resta":
        resta(num1, num2);
        break;
      case "multiplicacion":
        multiplicacion(num1, num2);
        break;
      case "division":
        if (num2 != 0) {
          division(num1, num2);
        } else {
          alert("El denominador es 0 lo que es invalido");
        }

        break;
      case "residuo":
        if (num2 != 0) {
          residuo(num1, num2);
        } else {
          alert("El denominador es 0 lo que es invalido");
        }

        break;
        default:
          alert("Operacion invalida")
    }
} else {
    alert("no ingreso numeros");
}

  if (resultado != undefined) {
    respuesta.textContent = "Resultado es: " + resultado;
  } else {
  }
}

function suma(num1, num2) {
  resultado = num1 + num2;
  return resultado;
}

function resta(num1, num2) {
  resultado = num1 - num2;
  return resultado;
}

function multiplicacion(num1, num2) {
  resultado = num1 * num2;
  return resultado;
}

function division(num1, num2) {
  resultado = num1 / num2;
  return resultado;
}

function residuo(num1, num2) {
  resultado = num1 % num2;
  return resultado;
}
