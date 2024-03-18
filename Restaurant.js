var cliente = prompt("Ingrese su nombre");
var cantidaddeplatos = prompt("Ingrese cuantos platos consumio");
var totalcomida = 0;
for (let i = 1; i <= cantidaddeplatos; i++) {
    var comida = prompt("Ingrese precio del plato numero " + i);

    totalcomida += Number(comida);


}


var bebida = 900 + 650;
// se muestran resultados
console.log("EL total en comida fue: ", totalcomida);
console.log("el total en bebida es: " + bebida);

// se suma el total a pagar
console.log("-------------------------------------------");
var total = totalcomida + bebida;
alert("Sr. " + cliente + " El total a pagar es: " + total);
