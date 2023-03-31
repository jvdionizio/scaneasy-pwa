/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { clsx } from 'clsx';

function TextInputInput(props) {
  return (
    <input
      className={ clsx(
        {
          'bg-transparent': props.type !== 'number',
          'bg-white-smoked': props.type === 'number',
        },
        'flex-1',
        'text-gray-900',
        'text-sm',
        'placeholder:text-gray-850',
        'outline-none',
        'w-full',
        {
          'text-center': props.type === 'number',
        },
      ) }
      { ...props }
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export default TextInputInput;
