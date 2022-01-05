function multiplyBy5(num) {
    const five = 5;

    function multiply() {
        return five * num;
    }

    return multiply();
}

console.log(multiplyBy5(10));
console.log(multiplyBy5(12));
console.log(multiplyBy5(7));

/* ----------------------------------------------------- */

function changeFontSize(choice) {
    let fontSize = 16;

    console.log("entrou");
    console.log(choice);
    
    if(choice == 0) {
        console.log("entrou 0");
        function incrementSize() {
            fontSize++;
            document.body.style.fontSize = fontSize + 'px';
        }
        incrementSize();
    } else if(choice == 1) {
        function decrementSize() {
            fontSize--;
            document.body.style.fontSize = fontSize + 'px';
            console.log("entrou 1");
        }
        decrementSize();
    }
}