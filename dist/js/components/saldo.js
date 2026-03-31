import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { processarTransacao } from './novaTransacao.js';
import { conta } from '../models/conta.js';
import { renderizarExtrato } from './extrato.js';
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
}
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatacaoData(conta.dataAcesso);
}
renderizarExtrato(conta.transacoes);
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        processarTransacao(elementoFormulario);
        elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
        renderizarExtrato(conta.transacoes);
    }
    catch (erro) {
        if (erro instanceof Error) {
            alert(erro.message);
        }
    }
});
