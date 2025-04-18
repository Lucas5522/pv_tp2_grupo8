"4. Declarar una variable y almacenar en ella un valor numérico que representa el lado de un cuadrado. Calcular el área y el perímetro del cuadrado y mostrar los resultados por consola. Area = 2 * lado Perímetro = lado + lado + lado + lado"
let lado = 6;
let area = Math.pow(lado, 2);
let perimetro = lado * 4;
console.log("El área del cuadrado es: " + area + " cm²");
console.log("El perímetro del cuadrado es: " + perimetro + " cm");