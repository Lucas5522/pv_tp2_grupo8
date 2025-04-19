const colores = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#900C3F", "#581845", "#1ABC9C", "#2ECC71"];
const boton = document.getElementById("cambiarColor");
boton.addEventListener("click", () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`El color de fondo cambió a: ${colorAleatorio}`);
});