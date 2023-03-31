/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function HeaderBtn({ children, selected }, props) {
  return (
    <Slot
      type="button"
      className={ clsx(
        'py-4',
        'px-2',
        'bg-transparent',
        'font-sans',
        'font-semibold',
        'text-xl',
        'tracking-tighter',
        'text-white',
        'border',
        'border-b-green-500',
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

HeaderBtn.defaultProps = {
  selected: false,
};

HeaderBtn.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default HeaderBtn;
