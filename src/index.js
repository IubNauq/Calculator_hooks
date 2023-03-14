import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));


function Calculator() {
    const [result, setResult] = useState("");

    function handleNumOpe(event) {
        setResult(result.concat(event.target.value))
    }

    function handleEqual() {
        try {
            setResult(String(eval(result)))
        } catch (err) {
            setResult("ERROR")
        }
    }

    function handleDEL() {
        setResult(result.substring(0, result.length - 1))
    }

    function handleAC() {
        setResult("")
    }


    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand"></div>
                <div className="current-operand">{result}</div>
            </div>
            <button className="span-two"
                    onClick={handleAC}>AC
            </button>
            <button onClick={handleDEL}>DEL</button>
            <button onClick={handleNumOpe}
                    value={'/'}>/
            </button>
            <button onClick={handleNumOpe}
                    value={'1'}>1
            </button>
            <button onClick={handleNumOpe}
                    value={'2'}>2
            </button>
            <button onClick={handleNumOpe}
                    value={'3'}>3
            </button>
            <button onClick={handleNumOpe}
                    value={'*'}>*
            </button>
            <button onClick={handleNumOpe}
                    value={'4'}>4
            </button>
            <button onClick={handleNumOpe}
                    value={'5'}>5
            </button>
            <button onClick={handleNumOpe}
                    value={'6'}>6
            </button>
            <button onClick={handleNumOpe}
                    value={'+'}>+
            </button>
            <button onClick={handleNumOpe}
                    value={'7'}>7
            </button>
            <button onClick={handleNumOpe}
                    value={'8'}>8
            </button>
            <button onClick={handleNumOpe}
                    value={'9'}>9
            </button>
            <button onClick={handleNumOpe}
                    value={'-'}>-
            </button>
            <button onClick={handleNumOpe}
                    value={'.'}>.
            </button>
            <button onClick={handleNumOpe}
                    value={'0'}>0
            </button>
            <button className="span-two"
                    onClick={handleEqual}>=
            </button>
        </div>
    );
}

root.render(<Calculator/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
