let numeros = [];

function armazenar() {
    event.preventDefault();

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;
    let numero4 = document.getElementById("numero4").value;

    let addNumber;
    addNumber = numeros.push(Number(numero1));
    addNumber = numeros.push(Number(numero2));
    addNumber = numeros.push(Number(numero3));
    addNumber = numeros.push(Number(numero4));

    imprimir(numeros);
}

function inverter() {
    let numerosLength = numeros.length;
    let numerosInverso = [];
    let addNumber;

    for(let i = numerosLength; i > 0; i--) {
        addNumber = numerosInverso.push(numeros[i-1]);
    }

    imprimir(numerosInverso);
}

function ordenar() {
    for(let i = 0; i < numeros.length - 1; i++) {
        for(let j = 0; j < numeros.length - 1; j++) {
            if(numeros[j] > numeros[j+1]) {
                let aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }

    imprimir(numeros);
}

function imprimir(array) {
    let body = document.querySelector("body");

    let print = document.createElement("span");
    print.innerHTML = array;
    body.appendChild(print);
}