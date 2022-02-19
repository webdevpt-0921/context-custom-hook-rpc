import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((p) => p + 1);
  };

  return { counter, increment };
}

export default useCounter;
