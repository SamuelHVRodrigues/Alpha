function corrida(numeroVoltas) {
    let velocidadePedro;
    let velocidadeJuca;
    let velocidadeEdna;

    let vitoriasPedro = 0;
    let vitoriasJuca = 0;
    let vitoriasEdna = 0;
    
    let campeao;
    
    for(let i = 0; i < numeroVoltas; i++) {
        velocidadePedro = Math.floor((Math.random() * 80) + 150) * 0.97;
        velocidadeJuca = Math.floor((Math.random() * 140) + 120) * 0.95;
        velocidadeEdna = Math.floor((Math.random() * 40) + 180) * 0.99;
        
        if(velocidadePedro > velocidadeJuca) {
            if(velocidadePedro > velocidadeEdna) {
                vitoriasPedro++;
            }
            else {
                vitoriasEdna++;
            }
        } else {
            if(velocidadeJuca > velocidadeEdna) {
                vitoriasJuca++;
            }
            else {
                vitoriasEdna++;
            }
        }
        if(i == numeroVoltas - 1) {
            if(vitoriasPedro > vitoriasJuca) {
                if(vitoriasPedro > vitoriasEdna) {
                    campeao = "Pedro";
                }
                else if(vitoriasPedro == vitoriasEdna) {
                    i--;
                } else {
                    campeao = "Edna";
                }
            } else {
                if(vitoriasJuca > vitoriasEdna) {
                    campeao = "Juca";
                }
                else if(vitoriasJuca == vitoriasEdna) {
                    i--;
                } else {
                    campeao = "Edna";
                }
            }
        }
    }

    let main = document.querySelector(".container");
    let vencedor = document.createElement("span");
    vencedor.innerHTML = `${campeao} venceu a corrida!`;
    main.appendChild(vencedor);
    
    let jog1 = document.createElement("span");
    jog1.innerHTML = `Pedro: ${vitoriasPedro}`;
    main.appendChild(jog1);
    
    let jog2 = document.createElement("span");
    jog2.innerHTML = `Juca: ${vitoriasJuca}`;
    main.appendChild(jog2);
    
    let jog3 = document.createElement("span");
    jog3.innerHTML = `Edna: ${vitoriasEdna}`;
    main.appendChild(jog3);
}
        /*
        if(i == numeroVoltas-1) {
            verificaVencedor(campeao, vitoriasPedro, vitoriasJuca, vitoriasEdna, numeroVoltas);
        }
    }

    vencedor(campeao, vitoriasPedro, vitoriasJuca, vitoriasEdna);
}

function verificaVencedor(campeao, vitoriasPedro, vitoriasJuca, vitoriasEdna, numeroVoltas) {
    if(vitoriasPedro > vitoriasJuca) {
        if(vitoriasPedro > vitoriasEdna) {
            campeao = "Pedro";
        }
        else if(vitoriasPedro == vitoriasEdna) {
            numeroVoltas++;
        } else {
            campeao = "Edna";
        }
    } else {
        if(vitoriasJuca > vitoriasEdna) {
            campeao = "Juca";
        }
        else if(vitoriasJuca == vitoriasEdna) {
            numeroVoltas++;
        } else {
            campeao = "Edna";
        }
    }
}


function vencedor(campeao, vitoriasPedro, vitoriasJuca, vitoriasEdna) {

    let main = document.querySelector(".container");
    let vencedor = document.createElement("span");
    vencedor.innerHTML = `${campeao} venceu a corrida!`;
    main.appendChild(vencedor);
    
    let jog1 = document.createElement("span");
    jog1.innerHTML = `Pedro: ${vitoriasPedro}`;
    main.appendChild(jog1);
    
    let jog2 = document.createElement("span");
    jog2.innerHTML = `Juca: ${vitoriasJuca}`;
    main.appendChild(jog2);
    
    let jog3 = document.createElement("span");
    jog3.innerHTML = `Edna: ${vitoriasEdna}`;
    main.appendChild(jog3);
}*/