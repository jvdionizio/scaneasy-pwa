import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

function Icon({ children, weight }) {
  return (
    <Slot
      className={ clsx(
        'w-6',
        'h-6',
        'text-gray-800',
        'self-start'
      ) }
      weight={ weight }
    >
      {children}
    </Slot>
  );
}

Icon.displayName = 'Header.Icon';

Icon.defaultProps = {
  weight: 'bold',
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
};

export default Icon;
