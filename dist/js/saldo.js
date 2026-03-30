"use strict";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo.toString();
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
;
