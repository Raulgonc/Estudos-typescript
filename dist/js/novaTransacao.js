"use strict";
function processarTransacao(elementoFormulario, elementoSaldo, saldo) {
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipo = inputTipoTransacao.value;
    let valor = (inputValor.valueAsNumber);
    let data = new Date(inputData.value);
    if (tipo === tipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipo === tipoTransacao.TRANSFERENCIA ||
        tipo === tipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida!");
        return saldo;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipo,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
    return saldo;
}
