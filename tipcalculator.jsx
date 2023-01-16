import React from 'react';
import {useState} from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);

  const handleBill = e => {
    e.preventDefault();

    setBill(e.target.value)
  };

  const handleTip = e => {
    e.preventDefault();

    setTip(e.target.value);
  };

  const handlePeople = e => {
    e.preventDefault();

    setPeople(e.target.value);
  };

  const calculateTip = () => {
    const totalTip = bill * (tip * .01);

    if (totalTip == 0) {
      return '-'
    } else {
      return '$' + totalTip.toFixed(2);
    }
  }

  const calculateTipPerPerson = () => {
    const totalTip = bill * (tip * .01);
    const tipPerPerson = totalTip / people;

    if (tipPerPerson == 0) {
      return '-'
    } else {
      return '$' + tipPerPerson.toFixed(2);
    }
  }

  return (
    <>
      <label htmlFor='bill'>Bill</label>
      <input id='bill' type='number' onChange={handleBill} value={bill}></input>
      <label htmlFor='tip'>Tip Percentage</label>
      <input id='tip' type='number' onChange={handleTip} value={tip}></input>
      <label htmlFor='people'>Number of People</label>
      <input id='people' type='number' onChange={handlePeople} value={people}></input>
      <p>Total Tip: {calculateTip()}</p>
      <p>Tip Per Person: {calculateTipPerPerson()}</p>
    </>
  );
}