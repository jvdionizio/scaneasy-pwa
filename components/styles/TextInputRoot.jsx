/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function TextInputRoot({ children, error }, props) {
  return (
    <label
      className={ clsx(
        'flex',
        'items-center',
        'gap-3',
        'pb-5',
        'w-full',
        'border-b-[1px]',
        'placeholder: text-gray-850',
        'border-b-gray-850',
        {
          'border-b-red-500': error,
        },
        'focus-within: border-b-gray-900'
      ) }
      { ...props }
    >
      {children}
    </label>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

TextInputRoot.defaultProps = {
  error: false,
};

TextInputRoot.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default TextInputRoot;
