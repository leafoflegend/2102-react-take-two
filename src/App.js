import { useState } from 'react';
import IncrementButton from './Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{count}</h1>
      <IncrementButton title={'Increment 2'} handleClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
