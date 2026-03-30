import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { processarTransacao } from './novaTransacao.js';
import { conta } from '../models/conta.js';

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

if (elementoSaldo !== null) {
  elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
}

if (elementoDataAcesso !== null) {
  elementoDataAcesso.textContent = formatacaoData(conta.dataAcesso);
}

elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  try {
    processarTransacao(elementoFormulario);
    elementoSaldo.textContent = formatacaoMoedas(conta.saldo);
  } catch (erro) {
    if (erro instanceof Error) {
      alert(erro.message);
    }
  }
});
