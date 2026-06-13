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

else if (Number(passo.value) == 0 || Number(inicio.value) == 0 || Number(fim.value) == 0) {
    resultado.innerHTML = `Impossível contar com  zero!`
}
else if (Number(passo.value) === 0) { 
    for (let i = Number(inicio.value); i <= Number(fim.value); i += 1) {
    alert("Passo inválido! iremos contar normalmente.")    
    resultado.innerHTML += i + " ";
    }
}
else {
    let c = Number(inicio.value);
    let p = Number(passo.value);
    let f = Number(fim.value);
    for (let i = Number(inicio.value); i <= f; i += p) {
        resultado.innerHTML += i + " ";
    }
    resultado.innerHTML += "FIM!";
}}
