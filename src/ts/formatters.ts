function formatacaoMoedas(valor: number): string {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


function formatacaoData(data: Date): string {
    return data.toLocaleDateString("pt-br",  {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}