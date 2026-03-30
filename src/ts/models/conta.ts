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
  if (transacao.valor <= 0) {
    throw new Error("O valor da transação deve ser maior que zero.");
  }

  if (
    transacao.tipoTransacao === tipoTransacao.TRANSFERENCIA ||
    transacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO
  ) {
    if (transacao.valor > conta.saldo) {
      throw new Error("Saldo insuficiente para realizar esta operação.");
    }
    conta.saldo -= transacao.valor;
  } else {
    conta.saldo += transacao.valor;
  }

  conta.transacoes.push(transacao);
}
