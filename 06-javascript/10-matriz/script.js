let board = 
[   ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']   ]

    let playerO = true;

function jogoDaVelha(linha, coluna) {

    if(playerO) {
        board[linha][coluna] = "O";
        playerO = false;
    } else {
        board[linha][coluna] = "X";
        playerO = true;
    }

    console.log(board);

    if(board[0][0] == board[0][1] && board[0][1] == board[0][2]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[1][0] == board[1][1] && board[1][1] == board[1][2]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[2][0] == board[2][1] && board[2][1] == board[2][2]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[0][0] == board[1][0] && board[1][0] == board[2][0]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[0][1] == board[1][1] && board[1][1] == board[2][1]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[0][2] == board[1][2] && board[1][2] == board[2][2]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    } else if(board[0][2] == board[1][1] && board[1][1] == board[3][0]){
        if(playerO) {
            alert("Jogador X venceu!");
        } else {
            alert("Jogador O venceu!");
        }
    }
}