function executar(fn, num1, num2) {
    console.log(fn(num1, num2))
}

const somar = function(a,b) {
    return a + b
}

executar(somar, 2,3)