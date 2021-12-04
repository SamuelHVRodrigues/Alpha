let board = 
[   ["", "", ""],
    ["", "", ""],
    ["", "", ""]   ]

    let playerO = true;

function jogoDaVelha(linha, coluna) {

    if(playerO && board[linha][coluna] == "") {
        board[linha][coluna] = "O";
        playerO = false;
        console.log("entrei O")
        event.target.innerHTML = "O";
    } else if(!playerO && board[linha][coluna] == "") {
        board[linha][coluna] = "X";
        playerO = true;
        console.log("entrei X");
        event.target.innerHTML = "X";
    }
    console.log(board);
    vencedor(playerO);

}

function vencedor(playerO) {
    if(board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][2] != ""){
        imprimeVencedor(playerO);
    } else if(board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][2] != ""){
        imprimeVencedor(playerO);
    } else if(board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] != ""){
        imprimeVencedor(playerO);
    } else if(board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] != ""){
        imprimeVencedor(playerO);
    } else if(board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] != ""){
        imprimeVencedor(playerO);
    } else if(board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] != ""){
        imprimeVencedor(playerO);
    } else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != ""){
        imprimeVencedor(playerO);
    } else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != ""){
        imprimeVencedor(playerO);
    }
}

function reset() {
    board =
    [   ["", "", ""],
        ["", "", ""],
        ["", "", ""]   ]

    playerO = true;

    document.getElementById("field-1").innerHTML = "";
    document.getElementById("field-2").innerHTML = "";
    document.getElementById("field-3").innerHTML = "";
    document.getElementById("field-4").innerHTML = "";
    document.getElementById("field-5").innerHTML = "";
    document.getElementById("field-6").innerHTML = "";
    document.getElementById("field-7").innerHTML = "";
    document.getElementById("field-8").innerHTML = "";
    document.getElementById("field-9").innerHTML = "";
}

function imprimeVencedor(playerO) {
    let player;

    if(playerO) {
        player = "X";
    } else {
        player = "O";
    }

    let table = document.getElementById("table");
    let winner = document.createElement("h2");
    winner.className = "winner";
    winner.innerHTML = `O jogador ${player} venceu!`;
    table.appendChild(winner);
}