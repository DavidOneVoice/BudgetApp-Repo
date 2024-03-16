import './IT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function IT({ currency, handleChange }) {
    const dollar = '\u0024';
    const euro = '\u20AC';
    const pounds = '\u00A3';
    const rupees = '\u20B9';
    const currencySymbol = currency === 'dollar' ? dollar : currency === 'euro' ? euro : currency === 'pounds' ? pounds : rupees;

    const [change, setChange] = useState(800);
    const addChanges = () => {
        setChange(change + 10);
    }
    const lessChanges = () => {
        setChange(change - 10);
    }

    return (
        <div id="IT">
            <h4>IT</h4>
            <h4 id='itbudget'>{currencySymbol} {change}</h4>
            <button onClick={addChanges} className='itbtn'><FontAwesomeIcon icon={faPlus} className='fonticon' /></button>
            <button onClick={lessChanges} className='itbtn'><FontAwesomeIcon icon={faMinus} className='fonticon' /></button>
            <button className='itbtn'><FontAwesomeIcon icon={faTrash} className='fonticon' /></button>
        </div>
    )
}