var fechainicio = prompt("Ingrese la fecha que desea averiguar");

var dia = new Date(fechainicio);


var diasemana = dia.getDay();

switch (diasemana) {

    case 0:
        alert("El dia segun su fecha es domingo");
        break;

    case 0:
        alert("El dia segun su fecha es domingo");
        break;
    case 1:
        alert("El dia segun su fecha es lunes");
        break;
    case 2:
        alert("El dia segun su fecha es martes");
        break;
    case 3:
        alert("El dia segun su fecha es miercoles");
        break;
    case 4:
        alert("El dia segun su fecha es jueves (juernes casi viernes xD)");
        break;
    case 5:
        alert("El dia segun su fecha es viernes");
        break;
    case 6:
        alert("El dia segun su fecha es sabado");
        break;


}

