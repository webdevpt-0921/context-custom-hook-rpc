import { createContext, useContext, useState } from "react";

const Context = createContext();

export function useCounterValue() {
  const { counter } = useContext(Context);
  return counter;
}

export function useCounterIncrement() {
  const { increment } = useContext(Context);
  return increment;
}

export function useCounter() {
  return useContext(Context);
}

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((p) => p + 1);
  };

  return (
    <div style={{ borderColor: "red" }}>
      <Context.Provider
        value={{
          counter,
          increment,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
}

export default CounterProvider;
