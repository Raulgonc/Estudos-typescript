import { tipoTransacao } from '../types/tipoTransacao.js';
import { Transacao } from '../types/transacao.js';
import { formatacaoMoedas } from '../uteis/formatters.js';

export function processarTransacao(elementoFormulario: HTMLFormElement, elementoSaldo: HTMLElement, saldo: number): number {
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  let tipo: tipoTransacao = inputTipoTransacao.value as tipoTransacao;
  let valor: number =(inputValor.valueAsNumber);
  let data: Date = new Date(inputData.value);

  if (tipo === tipoTransacao.DEPOSITO) {
    saldo += valor;
  } else if (
    tipo === tipoTransacao.TRANSFERENCIA ||
    tipo === tipoTransacao.PAGAMENTO_BOLETO
  ) {
    saldo -= valor;
  } else {
    alert("Tipo de transação inválida!");
    return saldo;
  }

  elementoSaldo.textContent = formatacaoMoedas(saldo);

  const novaTransacao: Transacao = {
    tipoTransacao: tipo, 
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
  
  return saldo;
}