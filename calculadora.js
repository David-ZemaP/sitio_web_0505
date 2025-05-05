// Definición de la función calcular_IMC

// Esta función calcula el índice de masa corporal (IMC) dado el peso y la altura
// Parámetros:

function calcular_IMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura); // Fórmula del IMC
    alert("Tu IMC es: " + imc); // Muestra el IMC en una alerta de pantalla
}