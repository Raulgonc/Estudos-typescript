import { Transacao } from '../types/transacao.js';
import { tipoTransacao } from '../types/tipoTransacao.js';
import { formatacaoMoedas, formatacaoData } from '../uteis/formatters.js';
import { FormatoData } from '../types/formatoData.js';

function criarItemTransacao(transacao: Transacao): HTMLElement {
  const isDebito =
    transacao.tipoTransacao === tipoTransacao.TRANSFERENCIA ||
    transacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO;

  const valorFormatado = isDebito
    ? `-${formatacaoMoedas(transacao.valor)}`
    : formatacaoMoedas(transacao.valor);

  const item = document.createElement('div');
  item.className = 'transacao-item';
  item.innerHTML = `
    <div class="transacao-info">
      <span class="tipo">${transacao.tipoTransacao}</span>
      <strong class="valor">${valorFormatado}</strong>
    </div>
    <time class="data">${formatacaoData(transacao.data, FormatoData.DIA_MES_ANO)}</time>
  `;
  return item;
}

export function renderizarExtrato(transacoes: Transacao[]): void {
  const registroTransacoes = document.querySelector('.registro-transacoes') as HTMLElement;
  if (!registroTransacoes) return;

  registroTransacoes.innerHTML = '';

  const grupos = new Map<string, Transacao[]>();

  for (const transacao of transacoes) {
    const chave = formatacaoData(transacao.data, FormatoData.MES_ANO);
    if (!grupos.has(chave)) {
      grupos.set(chave, []);
    }
    grupos.get(chave)!.push(transacao);
  }

  for (const [mesAno, transacoesDoMes] of grupos) {
    const grupo = document.createElement('div');
    grupo.className = 'transacoes-group';

    const titulo = document.createElement('strong');
    titulo.className = 'mes-group';
    titulo.textContent = mesAno;
    grupo.appendChild(titulo);

    for (const transacao of transacoesDoMes) {
      grupo.appendChild(criarItemTransacao(transacao));
    }

    registroTransacoes.appendChild(grupo);
  }
}
