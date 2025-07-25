export const calculatePrice = (
    costPrice,            // Custo do produto (R$)
    fixedCosts,           // Custo fixo por unidade (R$)
    taxRate,              // Imposto (%)
    commissionRate,       // Comissão / maquininha (%)
    desiredProfitMargin,  // Margem de lucro líquida desejada (%)
    imposto = 0           // Imposto adicional (%), opcional
) => {
    const cm = Number(costPrice);           // custo do produto
    const cf = Number(fixedCosts);          // custo fixo por unidade
    const percTaxa = Number(taxRate) / 100;
    const percComissao = Number(commissionRate) / 100;
    const percLucro = Number(desiredProfitMargin) / 100;
    const percImposto = Number(imposto) / 100;

    // Soma dos percentuais que saem do preço de venda
    const totalDescontos = percTaxa + percComissao + percImposto + percLucro;

    // Verificação de divisor inválido
    const divisor = 1 - totalDescontos;
    if (divisor <= 0) return NaN;

    // Cálculo do preço de venda ideal
    const pv = (cm + cf) / divisor;
    return Number.isFinite(pv) ? pv : NaN;
};
