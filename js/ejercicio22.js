const input = document.getElementById('entrada');
const salida = document.getElementById('salida');

input.addEventListener('input', function() {
    salida.textContent = input.value;
    if(input.value.length > 20){
        salida.classList.add('largo');
    } else {
        salida.classList.remove('largo');
    }
});