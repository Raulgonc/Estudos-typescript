let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoSaldo.textContent = saldo.toString();

elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  saldo = processarTransacao(elementoFormulario, elementoSaldo, saldo);
});

if (elementoSaldo !== null) {
elementoSaldo.textContent = formatacaoMoedas(saldo);

};


if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatacaoData(dataAcesso);
}
