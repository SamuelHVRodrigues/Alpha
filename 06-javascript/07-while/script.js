function writing() {
event.preventDefault();

    let blackboard = document.getElementById("blackboard");

    let repetition =  document.getElementById("repetition").value;
    let counterLines = 0;
    let counterClearBlackboard = 0;
    document.getElementById("blackboard").innerHTML="";

    while(repetition > 0) {
        if(counterLines < 11) {
            let newLine = document.createElement("span");
            newLine.innerHTML = "NINGUÉM GOSTA DE QUEM DÁ TAPA EM QUEIMADURAS ";
            newLine.className = "writing-animation";
            blackboard.appendChild(newLine);
            repetition--;
            counterLines++;
        } else {
            counterLines = 0;
            counterClearBlackboard++;
            document.getElementById("blackboard").innerHTML="";
        }
    }


    let question = document.getElementById("question");
    let print = document.createElement("span");
    print.innerHTML = `O Bart precisou apagar o quadro ${counterClearBlackboard} vezes e escreveu ${counterLines} linhas no último quadro.`;
    print.style.display = "block";
    question.appendChild(print);
}