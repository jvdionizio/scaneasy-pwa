import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

function IconNavBar({ children, selected }) {
  return (
    <Slot
      className={ clsx(
        'w-8',
        'h-8',
        {
          'text-gray-800': selected === false,
          'text-green-500': selected === true,
        }
      ) }
    >
      {children}
    </Slot>
  );
}

IconNavBar.displayName = 'Header.Icon';

IconNavBar.defaultProps = {
  selected: false
};

IconNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.node.bool,
};

export default IconNavBar;