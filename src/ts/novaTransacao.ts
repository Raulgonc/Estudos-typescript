function processarTransacao(elementoFormulario: HTMLFormElement, elementoSaldo: HTMLElement, saldo: number): void {
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  let tipoTransacao: string = inputTipoTransacao.value;
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
    return;
  }

  elementoSaldo.textContent = saldo.toString();

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
}