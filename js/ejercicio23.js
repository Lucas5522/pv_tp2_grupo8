const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById('resultado');

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            resultado.textContent = "Lenguaje seleccionado: " + this.value;
            console.log("Lenguaje seleccionado:", this.value);
        }
    });
});