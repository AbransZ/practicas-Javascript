var Numero1 = prompt("Ingrese el primer valor");
var Numero2 = prompt("Ingrese el segundo valor");
var conversion1 = Number(Numero1);
var conversion2 = Number(Numero2);
if (conversion1 > conversion2) {
    alert("El numero mayor es: " + Numero1);
    console.log("El mayor es: " + Numero1);
}
else {
    alert("El numero mayor es: " + Numero2);
    console.log("El mayor es: " + Numero2);
}