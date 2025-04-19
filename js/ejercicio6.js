let edades = [18, 22, 25, 30, 35, 40, 45, 50];
let suma = 0;
for (let i=0; i < edades.length; i++) {
    suma += edades[i];
}
let promedio = suma / edades.length;
console.log("El promedio de las edades es: " + promedio.toFixed(2) + " años.");