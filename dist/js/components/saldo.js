import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { processarTransacao } from './novaTransacao.js';
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoSaldo.textContent = saldo.toString();
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    saldo = processarTransacao(elementoFormulario, elementoSaldo, saldo);
});
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatacaoMoedas(saldo);
}
;
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatacaoData(dataAcesso);
}
