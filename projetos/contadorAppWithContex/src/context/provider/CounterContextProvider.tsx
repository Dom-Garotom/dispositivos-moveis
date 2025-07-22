import { ReactNode, useState } from 'react';
import { CounterContext } from '../models/models';



export function CounterProvider({ children }: { children: ReactNode }) {
  const [messageCount, setMessageCount] = useState<string>('');
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 100) {
      setCount(prev => prev + 1)
      setMessageCount('Contador Incrementado')
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(prev => prev - 1)
      setMessageCount('Contador Decrementado')
    }
  }

  function reset() {
    setCount(0)
    setMessageCount('Contador Reiniciado')
  }

  const canIncrement = count < 100;
  const canDecrement = count > 0;

  return (
    <CounterContext.Provider value={{
      count,
      increment,
      decrement,
      reset,
      canIncrement,
      canDecrement,
      countMessage: messageCount,
    }}>
      {children}
    </CounterContext.Provider>
  );
}