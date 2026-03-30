import { Transacao } from '../types/transacao.js';
import { tipoTransacao } from '../types/tipoTransacao.js';

type Conta = {
  saldo: number;
  dataAcesso: Date;
  transacoes: Transacao[];
};

export const conta: Conta = {
  saldo: 3000,
  dataAcesso: new Date(),
  transacoes: [],
};

export function registrarTransacao(transacao: Transacao): void {
  if (transacao.tipoTransacao === tipoTransacao.DEPOSITO) {
    conta.saldo += transacao.valor;
  } else {
    conta.saldo -= transacao.valor;
  }
  conta.transacoes.push(transacao);
}
