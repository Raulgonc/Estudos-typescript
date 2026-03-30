import { tipoTransacao } from '../types/tipoTransacao.js';
export const conta = {
    saldo: 3000,
    dataAcesso: new Date(),
    transacoes: [],
};
export function registrarTransacao(transacao) {
    if (transacao.valor <= 0) {
        throw new Error("O valor da transação deve ser maior que zero.");
    }
    if (transacao.tipoTransacao === tipoTransacao.DEPOSITO) {
        conta.saldo += transacao.valor;
    }
    else if (transacao.tipoTransacao === tipoTransacao.TRANSFERENCIA ||
        transacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO) {
        if (transacao.valor > conta.saldo) {
            throw new Error("Saldo insuficiente para realizar esta operação.");
        }
        conta.saldo -= transacao.valor;
    }
    else {
        throw new Error("Operação não permitida.");
    }
    conta.transacoes.push(transacao);
}
