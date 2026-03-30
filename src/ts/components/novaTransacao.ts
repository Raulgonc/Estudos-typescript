import { tipoTransacao } from '../types/tipoTransacao.js';
import { Transacao } from '../types/transacao.js';
import { registrarTransacao } from '../models/conta.js';

export function processarTransacao(elementoFormulario: HTMLFormElement): boolean {
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  const tipo: tipoTransacao = inputTipoTransacao.value as tipoTransacao;
  const valor: number = inputValor.valueAsNumber;
  const data: Date = new Date(inputData.value);

  if (tipo !== tipoTransacao.DEPOSITO &&
      tipo !== tipoTransacao.TRANSFERENCIA &&
      tipo !== tipoTransacao.PAGAMENTO_BOLETO) {
    alert("Tipo de transação inválida!");
    return false;
  }

  const transacao: Transacao = {
    tipoTransacao: tipo,
    valor: valor,
    data: data,
  };

  registrarTransacao(transacao);
  elementoFormulario.reset();

  return true;
}