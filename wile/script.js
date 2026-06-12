function contar() {
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let resultado = document.getElementById('resultado')
let limite = Number(fim.value)
resultado.innerHTML = "";
if ((inicio.value == "" || fim.value == "" || passo.value == "")) {
    alert(`${limite} não é um número válido para o contador`)
}
else{
for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
    resultado.innerHTML += i + " ";}}
}
  