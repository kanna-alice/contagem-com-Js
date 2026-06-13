function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = "";
    
    if (inicio.value === "" || fim.value === "" || passo.value == "") {
        resultado.innerHTML = `Impossível contar!`
    } else {
        let c = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p === 0) {
            resultado.innerHTML = `Impossível contar com zero!`
        } else {
            if (c < f) {
                for (let i = c; i <= f; i += p) {
                    resultado.innerHTML += i + " ";
                }
            } else {
                for (let i = c; i >= f; i -= p) {
                    resultado.innerHTML += i + " ";
                }
            }
            if (p === 0){
                p = 1
                for (let i = c; i <= f; i += p) {
                    resultado.innerHTML += i + " ";
                }
            }
            resultado.innerHTML += "FIM!";
        }}}
