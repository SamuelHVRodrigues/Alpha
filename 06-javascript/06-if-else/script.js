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

    alert(`${bread}, ${burguer}, ${cheese}, ${sauce}, ${salad}. Preço final: R$ ${burguerPrice}`);
}

function rate(id) {
    event.preventDefault();
    
    switch(id) {
        case 1: 
            document.getElementById("rate-1").checked = true;
            document.querySelector("#burguer-1").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-3").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-4").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 2:
            document.getElementById("rate-2").checked = true;
            document.querySelector("#burguer-1").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-4").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 3:
            document.getElementById("rate-3").checked = true;
            document.querySelector("#burguer-1").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            document.querySelector("#burguer-5").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 4:
            document.getElementById("rate-4").checked = true;
            document.querySelector("#burguer-1").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-5").setAttribute("src", "assets/hamburguer-siri-bnw.png");
            break;
        case 5:
            document.getElementById("rate-5").checked = true;
            document.querySelector("#burguer-1").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-2").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-3").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-4").setAttribute("src", "assets/hamburguer-siri.png");
            document.querySelector("#burguer-5").setAttribute("src", "assets/hamburguer-siri.png");
            break;
    }
}


function addComment() {
    let comments = document.getElementById("comments");

    let newCommentCard = document.createElement("div"); // Cria a div de novo comentário
    newCommentCard.className = "comment-card";
    comments.appendChild(newCommentCard);

    let newUserInfo = document.createElement("div"); // Cria a div de foto e nome de usuário
    newUserInfo.className = "user-info";
    newCommentCard.appendChild(newUserInfo);

    let newProfilePicture = document.createElement("img"); // Cria e preenche foto de perfil
    newProfilePicture.className = "profile-picture";
    newProfilePicture.src = "assets/lula-molusco.jfif";
    newUserInfo.appendChild(newProfilePicture);

    let newUserName = document.createElement("h4"); // Cria e preenche nome do usuário
    newUserName.innerHTML = document.getElementById("name").value;
    newUserInfo.appendChild(newUserName);

    let newTitle = document.createElement("h3"); // Cria e preenche o título do comentário
    newTitle.innerHTML = document.getElementById("title").value;
    newCommentCard.appendChild(newTitle);
    
    let newComment = document.createElement("p"); // Cria e preenche o conteúdo do comentário
    newComment.innerHTML = document.getElementById("comment").value;
    newCommentCard.appendChild(newComment);

    let rate = document.querySelector('input[name="rate"]:checked').value; // Resgata o valor da avaliação
    addRate(newCommentCard, rate); // Chama a função que replica a avaliação no comentário
}

function addRate(reference, id) {
    let newUl = document.createElement("ul"); // Cria a lista da avaliação
    reference.appendChild(newUl);

    let newLi1 = document.createElement("li"); // Cria o item 1 da avaliação
    newUl.appendChild(newLi1);
    let newBurguer1 = document.createElement("img");
    newLi1.appendChild(newBurguer1);
    
    let newLi2 = document.createElement("li"); // Cria o item 2 da avaliação
    newUl.appendChild(newLi2);
    let newBurguer2 = document.createElement("img");
    newLi2.appendChild(newBurguer2);
    
    let newLi3 = document.createElement("li"); // Cria o item 3 da avaliação
    newUl.appendChild(newLi3);
    let newBurguer3 = document.createElement("img");
    newLi3.appendChild(newBurguer3);
    
    let newLi4 = document.createElement("li"); // Cria o item 4 da avaliação
    newUl.appendChild(newLi4);
    let newBurguer4 = document.createElement("img");
    newLi4.appendChild(newBurguer4);
    
    let newLi5 = document.createElement("li"); // Cria o item 5 da avaliação
    newUl.appendChild(newLi5);
    let newBurguer5 = document.createElement("img");
    newLi5.appendChild(newBurguer5);

    switch(id) { // Replica a avaliação
        case "1":
            newBurguer1.src = "assets/hamburguer-siri.png";
            newBurguer2.src = "assets/hamburguer-siri-bnw.png";
            newBurguer3.src = "assets/hamburguer-siri-bnw.png";
            newBurguer4.src = "assets/hamburguer-siri-bnw.png";
            newBurguer5.src = "assets/hamburguer-siri-bnw.png";
            break
        case "2":
            newBurguer1.src = "assets/hamburguer-siri.png";
            newBurguer2.src = "assets/hamburguer-siri.png";
            newBurguer3.src = "assets/hamburguer-siri-bnw.png";
            newBurguer4.src = "assets/hamburguer-siri-bnw.png";
            newBurguer5.src = "assets/hamburguer-siri-bnw.png";

            break
        case "3":
            newBurguer1.src = "assets/hamburguer-siri.png";
            newBurguer2.src = "assets/hamburguer-siri.png";
            newBurguer3.src = "assets/hamburguer-siri.png";
            newBurguer4.src = "assets/hamburguer-siri-bnw.png";
            newBurguer5.src = "assets/hamburguer-siri-bnw.png";
            break
        case "4":
            newBurguer1.src = "assets/hamburguer-siri.png";
            newBurguer2.src = "assets/hamburguer-siri.png";
            newBurguer3.src = "assets/hamburguer-siri.png";
            newBurguer4.src = "assets/hamburguer-siri.png";
            newBurguer5.src = "assets/hamburguer-siri-bnw.png";
            break
        case "5":
            newBurguer1.src = "assets/hamburguer-siri.png";
            newBurguer2.src = "assets/hamburguer-siri.png";
            newBurguer3.src = "assets/hamburguer-siri.png";
            newBurguer4.src = "assets/hamburguer-siri.png";
            newBurguer5.src = "assets/hamburguer-siri.png";
            break
    }
}