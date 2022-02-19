import Button from "./components/Button";
import Counter from "./components/Counter";
import Div from "./components/Div";
import Dummy from "./components/Dummy";
import View from "./components/View";
import CounterProvider from "./context/CounterProvider";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Div>
          <View />
        </Div>
        <Button />
      </CounterProvider>
      <Counter>
        {({ counter, increment }) => {
          return (
            <>
              <h1>Header</h1>
              <Div>
                <p>counter value: {counter}</p>
                <button onClick={increment}> increment</button>
              </Div>
            </>
          );
        }}
      </Counter>
      <Counter>
        {({ counter, increment }) => {
          return (
            <>
              <h2></h2>
              <p>counter value: {counter}</p>
              <div>
                <div>
                  <button onClick={increment}> increment</button>
                </div>
              </div>
            </>
          );
        }}
      </Counter>
      <Dummy />
    </div>
  );
}

export default App;
