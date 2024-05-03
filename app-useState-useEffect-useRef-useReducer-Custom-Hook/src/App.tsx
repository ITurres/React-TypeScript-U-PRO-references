import Counter from './components/Counter';
import User from './components/User';

import TimerPadre from './components/TimerPadre';
import CounterRed from './components/CounterRed';
import Form from './components/Form';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr />

      <h2>useState</h2>
      <Counter />
      <User />

      <hr />

      <h2>useEffect - useRef</h2>
      <TimerPadre />

      <hr />

      <h2>useReducer</h2>
      <CounterRed />

      <hr />

      <h2>Custom Hooks</h2>
      <Form />
    </>
  );
}

export default App;
