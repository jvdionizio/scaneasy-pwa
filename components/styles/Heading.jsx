import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Heading({
  size,
  children,
  asChild,
  textColor,
  weight,
  uppercase
}) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={ clsx(
        'font-sans',
        'tracking-tighter',
        {
          'font-bold': weight === 'bold',
          'font-semibold': weight === 'semibold',
          'font-medium': weight === 'medium',
        },
        {
          'text-2md': size === 'sm',
          'text-3md': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
        },
        {
          'text-gray-900': textColor === '900',
          'text-gray-800': textColor === '800',
          'text-gray-400': textColor === '400',
          'text-blue-700': textColor === 'blue',
          'text-white ': textColor === 'white',
          'text-green-500': textColor === 'green',
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

Heading.defaultProps = {
  size: 'lg',
  asChild: false,
  textColor: '900',
  weight: 'bold',
  uppercase: false,
};

Heading.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  textColor: PropTypes.string,
  weight: PropTypes.string,
  uppercase: PropTypes.bool,
};
