import { Size } from '@/types/auxiliary';
import { CSSProperties } from 'react';

export const getCounterStyles = (size: Size): CSSProperties => {
  let baseStyles: CSSProperties = { padding: 4, border: '2px solid blue' };

  switch (size) {
    case 'small':
      return {
        ...baseStyles,
        width: 400,
        height: 200,
        backgroundColor: '#5adce8',
      };
    case 'medium':
      return {
        ...baseStyles,
        backgroundColor: '#8be7f0',
      };
    case 'large':
      return {
        ...baseStyles,
        backgroundColor: '#a7e5eb',
      };
    default:
      return baseStyles;
  }
};

export const buttonStyles = { bgcolor: 'orange', color: 'black' };

export const counterValueStyles = {
  bgcolor: '#0e83cc',
  px: 6,
  py: 1,
  color: 'white',
};
