let amigo = {nome: 'José', 
sexo:'masculino', 
peso:85.9,
engordar(p){
    console.log('engordou')
    this.peso += p 
}}
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)