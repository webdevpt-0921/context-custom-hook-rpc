import { useState } from "react";
import Button from "./Button";

function Counter({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((p) => p + 1);
  };

  return <div>{children({ counter, increment })}</div>;
}

export default Counter;
