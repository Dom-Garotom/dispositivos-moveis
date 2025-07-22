import { createContext } from "react";

interface CounterContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  canIncrement: boolean;
  canDecrement: boolean;
  countMessage : string
}

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

export {
  CounterContext
}