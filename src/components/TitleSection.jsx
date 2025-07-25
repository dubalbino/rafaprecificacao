import React from 'react';
import Logo from './Logo';
import '../css/TitleSection.css';

const TitleSection = () => {
    return (
        <div className="title-section">
            <Logo />
            <h1>Calculadora de Preço Real</h1>
            <h2>Descubra o preço real dos seus produtos</h2>
        </div>
    );
};

export default TitleSection;