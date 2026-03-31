import { Transacao } from '../types/transacao.js';
import { tipoTransacao } from '../types/tipoTransacao.js';

type TotaisPorTipo = {
  [key in tipoTransacao]: number;
};

type Conta = {
  saldo: number;
  dataAcesso: Date;
  transacoes: Transacao[];
  totaisPorTipo(): TotaisPorTipo;
};

export const conta: Conta = {
  saldo: 3000,
  dataAcesso: new Date(),
  transacoes: [
    { tipoTransacao: tipoTransacao.TRANSFERENCIA, valor: 36, data: new Date(2024, 8, 4) },
    { tipoTransacao: tipoTransacao.TRANSFERENCIA, valor: 58, data: new Date(2024, 8, 2) },
    { tipoTransacao: tipoTransacao.TRANSFERENCIA, valor: 50, data: new Date(2024, 7, 30) },
    { tipoTransacao: tipoTransacao.DEPOSITO,      valor: 86, data: new Date(2024, 7, 27) },
  ],
  totaisPorTipo(): TotaisPorTipo {
    const totais = {
      [tipoTransacao.DEPOSITO]: 0,
      [tipoTransacao.TRANSFERENCIA]: 0,
      [tipoTransacao.PAGAMENTO_BOLETO]: 0,
    };
    for (const transacao of this.transacoes) {
      totais[transacao.tipoTransacao] += transacao.valor;
    }
    return totais;
  },
};

export function registrarTransacao(transacao: Transacao): void {
  if (transacao.valor <= 0) {
    throw new Error("O valor da transação deve ser maior que zero.");
  }

  if (transacao.tipoTransacao === tipoTransacao.DEPOSITO) {
    conta.saldo += transacao.valor;
  } else if (
    transacao.tipoTransacao === tipoTransacao.TRANSFERENCIA ||
    transacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO
  ) {
    if (transacao.valor > conta.saldo) {
      throw new Error("Saldo insuficiente para realizar esta operação.");
    }
    conta.saldo -= transacao.valor;
  } else {
    throw new Error("Operação não permitida.");
  }

  conta.transacoes.push(transacao);
}
