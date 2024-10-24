import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [display, setDisplay] = useState("");

    const appendToDisplay = (input) => {
        const lastChar = display.slice(-1);
        if (["+", "-"].includes(input)) {
            if (!["+", "-"].includes(lastChar)) {
                setDisplay(display + input);
            }
        } else {
            setDisplay(display + input);
        }
    };

    const clearDisplay = () => {
        setDisplay("");
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay("Error");
        }
    };

    return (
        <div className="Calculator">
            <input type="text" className="Calculator-display" value={display} disabled />
            <div className="Calculator-row">
                <button onClick={clearDisplay} className="Calculator-button Calculator-clear">AC</button>
                <button className="Calculator-button Calculator-operator">( )</button>
                <button className="Calculator-button Calculator-operator">%</button>
                <button className="Calculator-button Calculator-operator">÷</button>
            </div>
            
            <div className="Calculator-row">
                <button onClick={() => appendToDisplay('7')} className="Calculator-button Calculator-num">7</button>
                <button onClick={() => appendToDisplay('8')} className="Calculator-button Calculator-num">8</button>
                <button onClick={() => appendToDisplay('9')} className="Calculator-button Calculator-num">9</button>
                <button className="Calculator-button Calculator-operator">x</button>
            </div>
            <div className="Calculator-row">
                <button onClick={() => appendToDisplay('4')} className="Calculator-button Calculator-num">4</button>
                <button onClick={() => appendToDisplay('5')} className="Calculator-button Calculator-num">5</button>
                <button onClick={() => appendToDisplay('6')} className="Calculator-button Calculator-num">6</button>
                <button onClick={() => appendToDisplay('-')} className="Calculator-button Calculator-operator">-</button>
            </div>
            <div className="Calculator-row">
                <button onClick={() => appendToDisplay('1')} className="Calculator-button Calculator-num">1</button>
                <button onClick={() => appendToDisplay('2')} className="Calculator-button Calculator-num">2</button>
                <button onClick={() => appendToDisplay('3')} className="Calculator-button Calculator-num">3</button>
                <button onClick={() => appendToDisplay('+')} className="Calculator-button Calculator-operator">+</button>
            </div>
            <div className="Calculator-row">
                <button onClick={() => appendToDisplay('0')} className="Calculator-button Calculator-num">0</button>
                <button className="Calculator-button Calculator-num">.</button>
                <button className="Calculator-button Calculator-num"></button>
                <button onClick={calculate} className="Calculator-button Calculator-calculate">=</button>
            </div>
        </div>
    );
}

export default Calculator;
