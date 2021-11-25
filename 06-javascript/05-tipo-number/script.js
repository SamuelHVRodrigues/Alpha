let number1 = document.querySelector("#number1");
let operator = document.querySelector("#operator");
let number2 = document.querySelector("#number2");
let result = document.querySelector("#result");

function somar() {
    operator.innerHTML = "+";
    result.innerHTML = (Number(number1.value) + Number(number2.value));
}

function subtrair() {
    operator.innerHTML = "-";
    result.innerHTML = parseInt(number1.value - number2.value);
}

function multiplicar() {
    operator.innerHTML = "*";
    result.innerHTML = parseInt(number1.value * number2.value);
}

function dividir() {
    operator.innerHTML = "/";
    result.innerHTML = parseInt(number1.value / number2.value);
}

function limpar() {
    number1.value = "";
    operator.innerHTML = "";
    number2.value = "";
    result.innerHTML = "";
}
