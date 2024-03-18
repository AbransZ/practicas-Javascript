var tamaño = prompt("Ingrese el tamaño del vector");
var conver = Number(tamaño);
var vector = new Array(conver);

for (let i = 0; i < vector.length; i++) {

    vector[i] = prompt("ingrese valor " + (i + 1) + " del vector: ");

}


console.log("su vector es: " + vector)

