import { tipoTransacao } from '../types/tipoTransacao.js';
export function processarTransacao(elementoFormulario) {
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipo = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipo !== tipoTransacao.DEPOSITO &&
        tipo !== tipoTransacao.TRANSFERENCIA &&
        tipo !== tipoTransacao.PAGAMENTO_BOLETO) {
        alert("Tipo de transação inválida!");
        return null;
    }
    const transacao = {
        tipoTransacao: tipo,
        valor: valor,
        data: data,
    };
    console.log(transacao);
    elementoFormulario.reset();
    return transacao;
}
