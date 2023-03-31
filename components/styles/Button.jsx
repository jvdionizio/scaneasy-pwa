/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, bgColor, textSize, width}, props) {
  return (
    <Slot
      className={ clsx(
        'flex',
        'justify-center',
        'items-center',
        'py-2',
        'px-3',
        'rounded-full',
        'font-sans',
        'font-semibold',
        'tracking-tighter',
        'text-white',
        {
          'w-full': width === 'full',
          'w-1/2': width === 'half',
          'w-1/3': width === 'third',
          'w-1/4': width === 'quarter',
          'w-1/5': width === 'fifth',
          'w-fit': width === 'fit',
        },
        {
          'bg-gray-800': bgColor === 'black',
          'bg-blue-700': bgColor === 'blue',
          'bg-green-500': bgColor === 'green',
        }, 
        'transition-colors',
        {
          'active:bg-gray-400': bgColor === 'black',
          'active:bg-blue-400': bgColor === 'blue',
          'active:bg-green-200': bgColor === 'green',
        },
        'hover:outline-none',
        { 
          'text-sm': textSize === 'xs',
          'text-2md': textSize === 'sm',
          'text-3md': textSize === 'md',
          'text-lg': textSize === 'lg',
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

Button.defaultProps = {
  asChild: false,
  bgColor: 'blue',
  textSize: 'md',
  width: 'full',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  bgColor: PropTypes.string,
  textSize: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
