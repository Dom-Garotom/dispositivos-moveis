import { CounterProvider } from '@/src/context/provider/CounterContextProvider';
import React from 'react';
import Count from '../components/Count';

export default function ContadorSimples() {

  return (
    <CounterProvider>
      <Count />
    </CounterProvider>
  );
}
