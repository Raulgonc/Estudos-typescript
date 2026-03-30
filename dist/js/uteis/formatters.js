"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatacaoMoedas = formatacaoMoedas;
exports.formatacaoData = formatacaoData;
const formatoData_1 = require("../types/formatoData");
function formatacaoMoedas(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function formatacaoData(data, formato = formatoData_1.FormatoData.DIA_MES_ANO) {
    if (formato === formatoData_1.FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === formatoData_1.FormatoData.DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === formatoData_1.FormatoData.MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            month: "2-digit",
            year: "numeric"
        });
    }
    // Default formatting if none of the above conditions match
    return data.toLocaleDateString("pt-br");
}
