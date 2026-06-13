function contar() {
    // Obtendo os elementos de entrada e resultado
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = "";
    
    if (inicio.value === "" || fim.value === "" || passo.value == "") {
        resultado.innerHTML = `Impossível contar!`
    } else {
        // Convertendo os valores para números
        let c = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        // Verificando se o passo é zero
        if (p === 0) {
            resultado.innerHTML = `Impossível contar com zero!`
        } 
        // Verificando se o passo é negativo
        else {
            if (c < f) {
                for (let i = c; i <= f; i += p) {
                    resultado.innerHTML += i + " ";
                }
                // Verificando se o passo é positivo
            } else {
                for (let i = c; i >= f; i -= p) {
                    resultado.innerHTML += i + " ";
                }
            }
            // Verificando se o passo é zero para evitar um loop infinito
            if (p === 0){
                p = 1
                for (let i = c; i <= f; i += p) {
                    resultado.innerHTML += i + " ";
                }
            }
            resultado.innerHTML += "FIM!";
        }}}
