function processarTransacao(elementoFormulario: HTMLFormElement, elementoSaldo: HTMLElement, saldo: number): number {
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  let tipoTransacao: tipoTransacao = inputTipoTransacao.value as tipoTransacao;
  let valor: number =(inputValor.valueAsNumber);
  let data: Date = new Date(inputData.value);

  if (tipoTransacao === "Depósito") {
    saldo += valor;
  } else if (
    tipoTransacao === "Transferência" ||
    tipoTransacao === "Pagamento de Boleto"
  ) {
    saldo -= valor;
  } else {
    alert("Tipo de transação inválida!");
    return saldo;
  }

  elementoSaldo.textContent = saldo.toString();

  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao, 
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
  
  return saldo;
}