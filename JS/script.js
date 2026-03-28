let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");

elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");

elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!elementoFormulario.checkValidity()) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
  const inputValor = elementoFormulario.querySelector("#valor");
  const inputData = elementoFormulario.querySelector("#data");

  let tipoTransacao = inputTipoTransacao.value;
  let valor = inputValor.value;
  let data = inputData.value;

  
  if (tipoTransacao === "deposito") {
    saldo += valor;
    } else if (tipoTransacao === "transferencia" || tipoTransacao === "pagamento de Boleto") {
    saldo -= valor;
  } else{
    alert("Tipo de transação inválida!");
    return;
  }
  

  elementoSaldo.textContent = saldo;
  
  
  
  
  
  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  console.log(novaTransacao);
  elementoFormulario.reset();

});
