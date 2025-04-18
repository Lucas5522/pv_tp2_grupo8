const paises = [
    { pais: "Argentina", capital: "Buenos Aires" },
    { pais: "Brasil", capital: "Brasilia" },
    { pais: "Chile", capital: "Santiago" },
    { pais: "Colombia", capital: "Bogotá" },
    { pais: "México", capital: "Ciudad de México" },
    { pais: "Perú", capital: "Lima" }
];

const paisSelect = document.getElementById("pais");
const capitalSelect = document.getElementById("capital");

paisSelect.addEventListener("change", function() {
    const seleccionado = paisSelect.value;
    const cap = paises.find(el => el.pais === seleccionado).capital;
    capitalSelect.value = cap;
    console.log("País seleccionado:", seleccionado, "Capital seleccionada:", cap);
});

capitalSelect.addEventListener("change", function() {
    const pais = paisSelect.value;
    const capital = capitalSelect.value;
    console.log("País seleccionado:", pais, "Capital seleccionada:", capital);
});