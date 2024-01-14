function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} `
        }
    }
}