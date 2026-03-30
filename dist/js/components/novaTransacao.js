import { tipoTransacao } from '../types/tipoTransacao.js';
import { registrarTransacao } from '../models/conta.js';
export function processarTransacao(elementoFormulario) {
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    const tipo = inputTipoTransacao.value;
    const valor = inputValor.valueAsNumber;
    const data = new Date(inputData.value);
    if (tipo !== tipoTransacao.DEPOSITO &&
        tipo !== tipoTransacao.TRANSFERENCIA &&
        tipo !== tipoTransacao.PAGAMENTO_BOLETO) {
        alert("Tipo de transação inválida!");
        return false;
    }
    const transacao = {
        tipoTransacao: tipo,
        valor: valor,
        data: data,
    };
    registrarTransacao(transacao);
    elementoFormulario.reset();
    return true;
}
