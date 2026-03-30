import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { processarTransacao } from './novaTransacao.js';
import { conta } from '../models/conta.js';
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
}
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatacaoData(conta.dataAcesso);
}
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const sucesso = processarTransacao(elementoFormulario);
    if (sucesso) {
        elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
    }
});
