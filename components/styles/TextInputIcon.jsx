import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function TextInputIcon({ children }) {
  return (
    <Slot
      className={ clsx(
        'w-7',
        'h-7',
        'text-gray-850',
      ) }
    >
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

TextInputIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextInputIcon;
