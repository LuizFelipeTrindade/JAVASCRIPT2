function gritar(expr) {
    return expr.toUpperCase() + '!!!'
}

const x = gritar('bom dia')

console.log(x)

function somar(a = 10, b = 10){
    return a + b
}

const result = somar(3, 5, 6, 7, 8, 9, 10)
console.log(result)

const result2 = somar(3)
console.log(result2)

const result3 = somar()
console.log(result3)

