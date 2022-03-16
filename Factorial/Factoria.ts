function factorial(num:number):number{
    let fact:number = 1
    while(num != 0){
        fact = fact*num
        num--
    }
    return fact
}

console.log(factorial(5))

function factorialRec(num:number):number{
    if(num == 0){
        return 1
    }else{
        return num * factorialRec(num-1)
    }
}

console.log(factorialRec(5))