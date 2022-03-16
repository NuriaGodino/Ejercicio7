function factorial(num) {
    var fact = 1;
    while (num != 0) {
        fact = fact * num;
        num--;
    }
    return fact;
}
console.log(factorial(5));
function factorialRec(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorialRec(num - 1);
    }
}
console.log(factorialRec(5));
