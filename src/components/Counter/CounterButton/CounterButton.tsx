import { Button, ButtonProps, Typography } from '@mui/material';
import React from 'react';
import { buttonStyles } from '../styles';

interface CounterButtonProps extends ButtonProps {
  label: string;
  onClick: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" sx={buttonStyles} onClick={onClick}>
      <Typography variant="h5" component="span" fontWeight={700}>
        {label}
      </Typography>
    </Button>
  );
};

export default CounterButton;
