var texto = document.getElementById("texto");

var hermanos = {
  abrahan: {
    ocupacion: "estudiar",
    edad: 27,
    vivienda: ["turmero"],
  },
  gabriel: {
    ocupacion: "trabajo de vendedor",
    edad: 21,
    vivienda: ["turmero", "arizona"],
  },
  xavier: {
    ocupacion: ["estudia", "juega futbol"],
    edad: 18,
    vivienda: ["turmero", "base sucre"],
  },
};
//console.log("🚀 ~ file: Objetos.js:9 ~ objeto:", objeto.Nombre)

texto.innerHTML = Object.keys(hermanos)+
  "<br>abrahan se dedica a " +
  hermanos["abrahan"].ocupacion +
  "<br> gabriel vive actualmente en " +
  hermanos["gabriel"].vivienda[1] +
  "<br> xavier juega " +
  hermanos["xavier"].ocupacion[1];
