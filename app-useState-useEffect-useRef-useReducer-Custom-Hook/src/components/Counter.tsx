import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (n: number = 1): void => {
    setCounter(counter + n);
  };

  return (
    <div className="mt-5">
      <h3>Counter Comp</h3>
      <span>{counter}</span>
      <br />
      <button
        className="btn btn-outline-primary m-2"
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary m-2"
        onClick={() => increment(2)}
      >
        +2
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
