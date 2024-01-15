let num = [5, 6, 4, 9, 8]
num.push('novo')
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
