import { useState } from 'react'
import './App.css'
import Heading from './Heading'
import Balance from './Balance'
import AllocationHeader from './AllocationHeader'
import AllocationTable from './AllocationTable'
import ChangeAllocation from './Change.Allocation'


function App() {
  const dollar = '\u0024';
  const euro = '\u20AC';
  const pounds = '\u00A3';
  const rupees = '\u20B9';
  const [currency, setCurrency] = useState('dollar');

  const currencySymbol = currency === 'dollar' ? dollar : currency === 'euro' ? euro : currency === 'pounds' ? pounds : rupees;

  const handleChange = (e) => {
    setCurrency(e.target.value);
  }
  return (
    <>

      < Heading />
      < Balance currency={currency} handleChange={handleChange} />
      < AllocationHeader />
      <AllocationTable currency={currency} handleChange={handleChange} />
      <ChangeAllocation currency={currency} handleChange={handleChange} />

    </>
  )
}

export default App
