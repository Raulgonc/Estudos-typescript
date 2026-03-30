"use strict";
function formatacaoMoedas(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function formatacaoData(data) {
    return data.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
