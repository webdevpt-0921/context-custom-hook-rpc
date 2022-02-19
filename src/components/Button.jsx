import { useCounterIncrement } from "../context/CounterProvider";

function Button() {
  const increment = useCounterIncrement();
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default Button;
