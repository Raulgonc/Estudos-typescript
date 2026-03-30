import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { processarTransacao } from './novaTransacao.js';
import { tipoTransacao } from '../types/tipoTransacao.js';
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatacaoMoedas(saldo);
}
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatacaoData(dataAcesso);
}
function calcularSaldo(transacao) {
    if (transacao.tipoTransacao === tipoTransacao.DEPOSITO) {
        saldo += transacao.valor;
    }
    else {
        saldo -= transacao.valor;
    }
    elementoSaldo.textContent = formatacaoMoedas(saldo);
}
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const transacao = processarTransacao(elementoFormulario);
    if (transacao !== null) {
        calcularSaldo(transacao);
    }
});
