import './Salary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Salary({ currency, handleChange }) {
    const dollar = '\u0024';
    const euro = '\u20AC';
    const pounds = '\u00A3';
    const rupees = '\u20B9';
    const currencySymbol = currency === 'dollar' ? dollar : currency === 'euro' ? euro : currency === 'pounds' ? pounds : rupees;

    const [change, setChange] = useState(1200);
    const addChanges = () => {
        setChange(change + 10);
    }
    const lessChanges = () => {
        setChange(change - 10);
    }

    return (

        <div id="salary">
            <h4>Salary</h4>
            <h4 id='salarybudget'>{currencySymbol} {change}</h4>
            <button onClick={addChanges} className='salarybtn'><FontAwesomeIcon icon={faPlus} className='fonticon' /></button>
            <button onClick={lessChanges} className='salarybtn'><FontAwesomeIcon icon={faMinus} className='fonticon' /></button>
            <button className='salarybtn'><FontAwesomeIcon icon={faTrash} className='fonticon' /></button>
        </div>
    )
}