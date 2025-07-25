import React, { useState } from 'react';
import { calculatePrice } from '../scripts/calculatePrice';
import '../css/CalculatorForm.css';

const CalculatorForm = () => {
    const [costPrice, setCostPrice] = useState('');
    const [fixedCosts, setFixedCosts] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [commissionRate, setCommissionRate] = useState('');
    const [desiredProfitMargin, setDesiredProfitMargin] = useState('');
    const [realPrice, setRealPrice] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const price = calculatePrice(costPrice, fixedCosts, taxRate, commissionRate, desiredProfitMargin);
        setRealPrice(price);
    };

    return (
        <div className="calculator-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Preço de Custo:</label>
                    <input type="number" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Custos Fixos:</label>
                    <input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} required />
                </div>
                <div>
                    <label>Taxa de Imposto (%):</label>
                    <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} required />
                </div>
                <div>
                    <label>Taxa de Comissão (%):</label>
                    <input type="number" value={commissionRate} onChange={(e) => setCommissionRate(e.target.value)} required />
                </div>
                <div>
                    <label>Margem de Lucro Desejada (%):</label>
                    <input type="number" value={desiredProfitMargin} onChange={(e) => setDesiredProfitMargin(e.target.value)} required />
                </div>
                <button type="submit">Calcular o Preço Real do Produto</button>
            </form>
            {/* Exibe o resultado apenas se for um número válido */}
            {typeof realPrice === 'number' && !isNaN(realPrice) && (
                <div className="result">
                    <h2>Preço Real: R$ {realPrice.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default CalculatorForm;