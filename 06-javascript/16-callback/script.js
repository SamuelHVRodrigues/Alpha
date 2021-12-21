megaSena((resultado) => {
    console.log(resultado);
})

function megaSena(callback) {
    const numerosSorteados = [];
    
    let intervID = 0;

    intervID = setInterval(() => {
        let numeroSorteado = sortearNumero();
        console.log(numeroSorteado)
        
        let found = verificaArray(numerosSorteados, numeroSorteado);
        console.log(found);
        
        if(numeroSorteado != found) {
            numerosSorteados.push(numeroSorteado);
        }    
        
        console.log(numerosSorteados);

        if(numerosSorteados.length == 6) {
            clearInterval(intervID);
        }

        imprimir(numerosSorteados[numerosSorteados.length - 1]);

    }, 1000);

    return callback(numerosSorteados);
}    


function verificaArray(numerosSorteados, numeroSorteado) {
    return numerosSorteados.find(numero => numero == numeroSorteado);
}

function sortearNumero() {
    return Math.floor(Math.random() * 60 + 1);
}


function callback(arg) {
    console.log(arg);
}

function imprimir(num) {
    let main = document.querySelector("main");
    
    let number = document.createElement("span");
    main.appendChild(number);
    number.innerHTML = num;
}
