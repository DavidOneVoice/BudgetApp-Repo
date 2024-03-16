import { useState } from "react";
import './AllocationTable.css'
import HumanResource from "./HumanResource";
import IT from "./IT";
import Salary from "./Salary";
import Finance from "./Finance";
import Sales from "./Sales";

export default function AllocationTable({ currency, handleChange }) {

    return (
        <section id="allocationsection">
            <div className="tableheadclass" id="tablehead">
                <h3>Department</h3>
                <h3>Allocated Budget</h3>
                <h3>Increase by 10</h3>
                <h3>Decrease by 10</h3>
                <h3>Delete</h3>
            </div>

            <HumanResource currency={currency} handleChange={handleChange} />
            <IT currency={currency} handleChange={handleChange} />
            <Salary currency={currency} handleChange={handleChange} />
            <Finance currency={currency} handleChange={handleChange} />
            <Sales currency={currency} handleChange={handleChange} />

        </section>
    )
}