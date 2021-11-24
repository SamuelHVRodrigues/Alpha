function rate(id) {
    switch(id) {
        case 5:
            document.querySelector("#burguer-1 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-5 img").setAttribute("src", "assets/hamburguer-siri.png");
            break;
        case 4:
            document.querySelector("#burguer-1 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-5 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 3:
            document.querySelector("#burguer-1 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 2:
            document.querySelector("#burguer-1 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-4 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 1: 
            document.querySelector("#burguer-1 img").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-3 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-4 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5 img").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
    }
}

/*
document.body.onload = createComment;

function createComment() {
    let divNova = document.createElement("h5");
    document.querySelector("h5").innerHTML("Conhecido");
    //let conteudoNovo = document.createTextNode("Desconhecido");
    //divNova.appendChild(conteudoNovo);

    //let divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova);
}

createComment();
*/