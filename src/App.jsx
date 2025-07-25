import React from 'react';
import CalculatorForm from './components/CalculatorForm';
import TitleSection from './components/TitleSection';
import './css/App.css';

const App = () => {
    return (
        <div className="app-container">
            <div className="title-section">
                <TitleSection />
            </div>
            <div className="calculator-form-container">
                <CalculatorForm />
            </div>
        </div>
    );
};

export default App;