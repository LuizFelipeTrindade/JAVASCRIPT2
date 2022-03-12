function precoComImposto(imposto, preco) {
    return preco * (1 + imposto)
}
//RJ
console.log(precoComImposto(0.11, 56.78))
console.log(precoComImposto(0.11, 12.33))
console.log(precoComImposto(0.11, 34.00))
console.log(precoComImposto(0.11, 11.56))
console.log(precoComImposto(0.11, 22.45))

function precoComImposto2(imposto) {
    function calcular(preco){
        return preco * (1 + imposto)
    }
    return calcular 
}
//RJ
const pcdorj = precoComImposto2(0.11)

console.log(pcdorj(56.78))
console.log(pcdorj(12.33))
console.log(pcdorj(34.00))
console.log(pcdorj(11.56))
console.log(pcdorj(22.45))