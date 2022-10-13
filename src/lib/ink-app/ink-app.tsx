
import React, { useEffect, useState } from 'react';
import { Text } from 'ink';

export function InkApp() {
  const [ count, setCount ] = useState<number>(0);

  useEffect(() => {
    (function increment() {
      setTimeout(() => {
        setCount(prevCount => prevCount + 1);
        increment();
      }, 100);
    })();
  }, []);

  return (
    <>
      <Text>Hello</Text>
      <Text>Count: {count}</Text>
    </>
  );
};
