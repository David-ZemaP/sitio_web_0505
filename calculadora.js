// Definición de la función calcular_IMC

// Esta función calcula el índice de masa corporal (IMC) dado el peso y la altura
// Parámetros:

function calcular_IMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    var resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado

    const imc = peso / (altura * altura);
    
    resultado.innerHTML = 'Tu IMC es ' + imc.toFixed(2) 

    if (imc < 18.5) {
        resultado.innerHTML += " Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += " Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += " Sobrepeso";
    } else {
        resultado.innerHTML += " Obesidad";
    }
}