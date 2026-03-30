"use strict";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
elementoSaldo.textContent = saldo.toString();
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
;
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
