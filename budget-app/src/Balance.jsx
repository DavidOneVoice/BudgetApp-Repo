import { useState } from "react";
import './Balance.css';

export default function Balance({ currency, handleChange }) {
    const dollar = '\u0024';
    const euro = '\u20AC';
    const pounds = '\u00A3';
    const rupees = '\u20B9';

    const currencySymbol = currency === 'dollar' ? dollar : currency === 'euro' ? euro : currency === 'pounds' ? pounds : rupees;
    const [budget, setBudget] = useState(20000);
    const handleBudgetChange = (evt) => {
        const budgetvalue = evt.target.value;
        if (!isNaN(budgetvalue) && parseInt(budgetvalue) <= 20000) {
            setBudget(budgetvalue);
        }
    }
    const [remaining, setRemaining] = useState(10000);
    const [spent, setSpent] = useState(10000);

    return (
        <section id="balance">
            <div className="balancediv">
                <h4>Budget:</h4>
                <span>{currencySymbol}</span>
                <input type="number" step={1} max={20000} name="budgetamount" id="budgetamount" value={budget} onChange={handleBudgetChange} />
            </div>
            <div className="balancediv">
                <h4>Remaining:</h4>
                <span>{currencySymbol}</span>
                <h4>{remaining}</h4>
            </div>
            <div className="balancediv">
                <h4>Spent so far:</h4>
                <span>{currencySymbol}</span>
                <h4>{spent}</h4>
            </div>
            <div className="balancediv">
                <h4>Currency:</h4>
                <select name="currency" id="currency" value={currency} onChange={handleChange}>
                    <option value="dollar">{dollar} Dollar</option>
                    <option value="euro">{euro} Euro</option>
                    <option value="pounds">{pounds} Pounds</option>
                    <option value="rupees">{rupees} Rupees</option>
                </select>
            </div>
        </section>
    )
}
