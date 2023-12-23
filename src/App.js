export default function App() {
  return (
    <div>
      <Bill />
      <Percentage>How did you like the service ?</Percentage>
      <Percentage>How did your friend like the service ?</Percentage>
      <Result />
      <Reset />
    </div>
  );
}

function Bill() {
  return (
    <label>
      How much was the bill ?
      <input type="text" placeholder="Enter the Bill Vaue" />
    </label>
  );
}

function Percentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Result() {
  return <p>You pay total (A + B)</p>;
}

function Reset() {
  return <button>Reset</button>;
}
