"7. Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más largo del array nombres. Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) que indica su tamaño."
let arrayNombres = ["Juan", "María", "Pedro", "Ana", "Isabel", "Carlos"];
let nombreMasLargo = arrayNombres[0];
for (let i = 1; i < arrayNombres.length; i++) {
    if (arrayNombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = arrayNombres[i];
    }
}
console.log("El nombre más largo es: " + nombreMasLargo);