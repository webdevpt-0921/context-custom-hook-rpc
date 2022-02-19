import { useCounterValue } from "../context/CounterProvider";

function View() {
  const counter = useCounterValue();
  return <div>{counter}</div>;
}

export default View;
