function contar() {
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let resultado = document.getElementById('resultado')
let limite = Number(fim.value)
resultado.innerHTML = "";
if ((inicio.value == "" || fim.value == "" || passo.value == "")) {
    resultado.innerHTML = `Impossível contar!`
}
else if (Number(passo.value) == 0 || Number(fim.value) == 0) {
    resultado.innerHTML = `Impossível contar com numeros zero!`
}
else {
    for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        resultado.innerHTML += i + " ";
    }
}}
