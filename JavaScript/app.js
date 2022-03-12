function menu() {
    function escondermenu(){

    }

    escondermenu()
}

const a = 3
const multiplicar = function(a, b) {
    return a * b
}

console.log(multiplicar(5,6))

const operacoes = [
    function (a, b) {
        return a + b
    },
    function (a, b) {
        return a - b
    },
    function (a, b) {
        return a * b
    },
    function (a, b) {
        return a / b
    }
]

console.log(operacoes[0](5,6))
console.log(operacoes[1](5,6))
console.log(operacoes[2](5,6))
console.log(operacoes[3](5,6))