import { useState } from "react"
import './ChangeAllocation.css'
export default function ChangeAllocation({ currency, handleChange }) {
    const [add, setAdd] = useState('default');
    const [allocation, setAllocation] = useState('default');

    const dollar = '\u0024';
    const euro = '\u20AC';
    const pounds = '\u00A3';
    const rupees = '\u20B9';
    const currencySymbol = currency === 'dollar' ? dollar : currency === 'euro' ? euro : currency === 'pounds' ? pounds : rupees;

    return (

        <section>

            <h2>Change Allocation</h2>

            <div id="lastdiv">

                <section>
                    <form action="">
                        <label htmlFor="allocation">Department</label>
                        <select name="allocation" id="allocation" value={allocation} onChange={handleChange} >
                            <option value="default">Choose...</option>
                            <option value="HR">Human Resource</option>
                            <option value="IT">IT</option>
                            <option value="Salary">Salary</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </form>
                </section>

                <section>
                    <form action="">
                        <label htmlFor="add">Allocation</label>
                        <select name="add" id="add" value={add} onChange={handleChange}>
                            <option value="default">Add</option>
                            <option value="HR">Human Resource</option>
                            <option value="IT">IT</option>
                            <option value="Salary">Salary</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </form>
                </section>

                <section className="lastallocationdiv">
                    <span>{currencySymbol}</span>
                    <input type="number" name="" id="" />
                </section>

                <button>Save</button>
            </div>

        </section>
    )
}