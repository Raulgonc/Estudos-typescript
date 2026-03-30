import { tipoTransacao } from './tipoTransacao';

export type Transacao = {
  tipoTransacao: tipoTransacao;
  valor: number;
  data: Date;
};