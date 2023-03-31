import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Text({
  size,
  uppercase,
  textColor,
  children,
  asChild,
  decoration,
}) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={ clsx(
        'font-sans',
        'tracking-tighter',
        {
          'text-gray-900': textColor === '900',
          'text-gray-800': textColor === '800',
          'text-gray-400': textColor === '400',
          'text-green-500': textColor === 'green',
          'text-blue-700': textColor === 'blue',
          'text-white ': textColor === 'white',
        },
        { 
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        {
          'line-through': decoration === 'risco',
          'text-decoration-line: underline': decoration === 'underline',
          'font-bold': decoration === 'bold',
          'font-medium': decoration === 'medium',
          'font-semibold': decoration === 'semibold',
          'font-light': decoration === 'light',
        },
        {
          uppercase,
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Text.defaultProps = {
  size: 'md',
  asChild: false,
  textColor: '900',
  decoration: 'none',
  uppercase: false,
}; 

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  textColor: PropTypes.string,
  decoration: PropTypes.string,
  uppercase: PropTypes.bool,
};
