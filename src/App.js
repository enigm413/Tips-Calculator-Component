import { useState } from "react";

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setfriendPercentage] = useState(0);

  const tip = (billValue * ((myPercentage + friendPercentage) / 2)) / 100;

  function handleReset() {
    setBillValue("");
    setMyPercentage(0);
    setfriendPercentage(0);
  }

  return (
    <div>
      <Bill billValue={billValue} onSetBillValue={setBillValue} />
      <Percentage percentage={myPercentage} onsetPercentage={setMyPercentage}>
        How did you like the service ?
      </Percentage>
      <Percentage
        percentage={friendPercentage}
        onsetPercentage={setfriendPercentage}
      >
        How did your friend like the service ?
      </Percentage>
      {billValue > 0 && (
        <>
          <Result billValue={billValue} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ billValue, onSetBillValue }) {
  return (
    <label>
      How much was the bill ?
      <input
        type="text"
        placeholder="Enter the Bill Vaue"
        value={billValue}
        onChange={(event) => onSetBillValue(Number(event.target.value))}
      />
    </label>
  );
}

function Percentage({ children, percentage, onsetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(event) => onsetPercentage(Number(event.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Result({ billValue, tip }) {
  return (
    <h3>
      You pay {billValue + tip} (${billValue} + {tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
