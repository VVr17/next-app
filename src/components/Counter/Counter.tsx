'use client';
import { Size } from '@/types/auxiliary';
import { calculateResult } from '@/utils/calculateResult';
import { Box, Typography } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import CounterButton from './CounterButton';
import { counterValueStyles, getCounterStyles } from './styles';

interface CounterProps {
  children?: ReactNode;
  size: Size;
}

const Counter: React.FC<CounterProps> = ({ children, size }) => {
  const [counterValue, setCounterValue] = useState<number>(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };

  return (
    <Box sx={getCounterStyles(size)}>
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
        textAlign="center"
      >{`<Counter/>`}</Typography>

      <Box
        display="flex"
        gap={2}
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        <CounterButton onClick={handleDecrement} label="-" />
        <CounterButton onClick={handleIncrement} label="+" />

        <Typography variant="h5" sx={counterValueStyles}>
          {counterValue}
        </Typography>
      </Box>

      <Typography variant="h6" component="p" textAlign="center" mb={2}>
        Formula Result: {calculateResult(counterValue)}
      </Typography>

      {children}
    </Box>
  );
};

export default Counter;
