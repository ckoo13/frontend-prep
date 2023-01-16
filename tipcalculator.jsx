import React from 'react';
import useState from 'react';

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

    return totalTip;
  }

  const calculateTipPerPerson = () => {
    const totalTip = bill * (tip * .01);
    const tipPerPerson = totalTip / people;

    return tipPerPerson;
  }

  return (
    <>
      <label>Bill
          <input type='number' onChange={handleBill} value={bill}></input>
      </label>
      <label>Tip Percentage
          <input type='number' onChange={handleTip} value={tip}></input>
      </label>
      <label>Number of People
          <input type='number' onChange={handlePeople} value={people}></input>
      </label>
      <p>Total Tip: ${calculateTip()}</p>
      <p>Tip Per Person: ${calculateTipPerPerson()}</p>
    </>
  );
}