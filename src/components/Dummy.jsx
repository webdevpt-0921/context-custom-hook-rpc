import useCounter from "../hooks/useCounter";

function Dummy() {
  const { counter, increment } = useCounter();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment with hook</button>
    </div>
  );
}

export default Dummy;
