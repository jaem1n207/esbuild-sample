import React, { useCallback, useState } from 'react';

const App = ({ message }: { message: string }) => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => (prev += 1));
  }, [count]);

  return (
    <>
      <h1>{message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;
