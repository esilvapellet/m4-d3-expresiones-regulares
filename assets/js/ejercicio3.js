let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

function suma(valor1, valor2) {
    let resultado = valor1 + valor2
    return resultado;
}
function resta(valor1, valor2) {
    let resultado;
    if (valor2 > valor1) {
        resultado = 0
    } else {
        resultado = valor1 - valor2
    }
    return resultado;
}
btnSumar.addEventListener("click", function () {
    resultado.innerHTML = suma(Number(valor1.value), Number(valor2.value));
})
btnRestar.addEventListener("click", function () {
    resultado.innerHTML = resta(Number(valor1.value), Number(valor2.value));
})