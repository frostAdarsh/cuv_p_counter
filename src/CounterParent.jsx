const CounterParent = ({ handleReset }) => {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterParent;
