import { tipoTransacao } from './tipoTransacao.js';

export type Transacao = {
  tipoTransacao: tipoTransacao;
  valor: number;
  data: Date;
};