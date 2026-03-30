"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarTransacao = processarTransacao;
const tipoTransacao_1 = require("../types/tipoTransacao");
const formatters_1 = require("../uteis/formatters");
function processarTransacao(elementoFormulario, elementoSaldo, saldo) {
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipo = inputTipoTransacao.value;
    let valor = (inputValor.valueAsNumber);
    let data = new Date(inputData.value);
    if (tipo === tipoTransacao_1.tipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipo === tipoTransacao_1.tipoTransacao.TRANSFERENCIA ||
        tipo === tipoTransacao_1.tipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida!");
        return saldo;
    }
    elementoSaldo.textContent = (0, formatters_1.formatacaoMoedas)(saldo);
    const novaTransacao = {
        tipoTransacao: tipo,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
    return saldo;
}
