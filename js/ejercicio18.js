export const cambiarTextoParrafo = () => {
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "¡El texto ha sido cambiado exitosamente!";
};

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", cambiarTextoParrafo);
});