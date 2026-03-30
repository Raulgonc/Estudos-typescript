"use strict";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo.toString();
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos corretamente!");
        return;
    }
    saldo = processarTransacao(elementoFormulario, elementoSaldo, saldo);
});
