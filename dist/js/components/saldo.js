"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("../uteis/formatters");
const novaTransacao_1 = require("./novaTransacao");
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoSaldo.textContent = saldo.toString();
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    saldo = (0, novaTransacao_1.processarTransacao)(elementoFormulario, elementoSaldo, saldo);
});
if (elementoSaldo !== null) {
    elementoSaldo.textContent = (0, formatters_1.formatacaoMoedas)(saldo);
}
;
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formatters_1.formatacaoData)(dataAcesso);
}
