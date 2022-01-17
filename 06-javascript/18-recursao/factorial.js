function factorial(number) {
    if(number === 0) {
        return 1;
    } else {
        return number * factorial(number-1);
    }
}

console.log(`0! = ${factorial(0)}`);
console.log(`1! = ${factorial(1)}`);
console.log(`2! = ${factorial(2)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`4! = ${factorial(4)}`);
console.log(`5! = ${factorial(5)}`);
console.log(`6! = ${factorial(6)}`);
console.log(`7! = ${factorial(7)}`);
console.log(`8! = ${factorial(8)}`);
console.log(`9! = ${factorial(9)}`);
console.log(`10! = ${factorial(10)}`);