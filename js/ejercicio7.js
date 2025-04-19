let arrayNombres = ["Juan", "María", "Pedro", "Ana", "Isabel", "Carlos"];
let nombreMasLargo = arrayNombres[0];
for (let i = 1; i < arrayNombres.length; i++) {
    if (arrayNombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = arrayNombres[i];
    }
}
console.log("El nombre más largo es: " + nombreMasLargo);