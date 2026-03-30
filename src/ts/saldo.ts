let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

elementoSaldo.textContent = saldo.toString();

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

if (elementoSaldo !== null) {
elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

};


if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br",  {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
