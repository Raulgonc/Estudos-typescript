import { tipoTransacao } from '../types/tipoTransacao.js';
import { Transacao } from '../types/transacao.js';

export function processarTransacao(elementoFormulario: HTMLFormElement): Transacao | null {
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  let tipo: tipoTransacao = inputTipoTransacao.value as tipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipo !== tipoTransacao.DEPOSITO &&
      tipo !== tipoTransacao.TRANSFERENCIA &&
      tipo !== tipoTransacao.PAGAMENTO_BOLETO) {
    alert("Tipo de transação inválida!");
    return null;
  }

  const transacao: Transacao = {
    tipoTransacao: tipo,
    valor: valor,
    data: data,
  };

  console.log(transacao);
  elementoFormulario.reset();

  return transacao;
}