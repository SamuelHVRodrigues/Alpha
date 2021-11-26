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

function price() {
    event.preventDefault()

    
    let bread = document.querySelector('input[name="bread"]:checked').value;
    let burguer = document.querySelector('input[name="burguer"]:checked').value;
    let cheese = document.querySelector('input[name="cheese"]:checked').value;
    let sauce = document.querySelector('input[name="sauce"]:checked').value;
    let salad = document.querySelector('input[name="salad"]:checked').value;

    let burguerPrice = 20;

    if(burguer == "Hamburguer de Siri Duplo") {
        burguerPrice = burguerPrice + 7;
    } else if(burguer == "Hamburguer de Siri Triplo") {
        burguerPrice = burguerPrice + 13;
    }

    if(cheese == "Mussarela") {
        burguerPrice = burguerPrice + 2;
    } else if(cheese == "Cheddar") {
        burguerPrice = burguerPrice + 2.5;
    } else if(cheese == "Coalho") {
        burguerPrice = burguerPrice + 3;
    }

    if(sauce == "Barbecue") {
        burguerPrice = burguerPrice + 1;
    } else if(sauce == "Tasty" || sauce == "Americano") {
        burguerPrice = burguerPrice + 1.25;
    }

    if(salad == "Tomate" || salad == "Alface") {
        burguerPrice = burguerPrice + 0.25;
    } else if(salad == "Picles") {
        burguerPrice = burguerPrice + 0.5;
    }

    //let breadChoice = document.getElementById("#bread-choice");
    //breadChoice.innerHTML("bread");

    alert(`${bread}, ${burguer}, ${cheese}, ${sauce}, ${salad}. Preço final: R$ ${burguerPrice}`);
}