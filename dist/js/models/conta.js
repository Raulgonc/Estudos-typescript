import { tipoTransacao } from '../types/tipoTransacao.js';
export const conta = {
    saldo: 3000,
    dataAcesso: new Date(),
    transacoes: [],
};
export function registrarTransacao(transacao) {
    if (transacao.tipoTransacao === tipoTransacao.DEPOSITO) {
        conta.saldo += transacao.valor;
    }
    else {
        conta.saldo -= transacao.valor;
    }
    conta.transacoes.push(transacao);
}
