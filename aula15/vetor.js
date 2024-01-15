let valores = [8, 2, 3, 4, 5, 7, 9]

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A Posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Mesma funcionalidade

for (let pos in valores) {
    console.log(`A Posição ${pos} tem o valor ${valores[pos]}`)
}

