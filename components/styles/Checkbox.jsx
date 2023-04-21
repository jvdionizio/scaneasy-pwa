import React from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import clsx from 'clsx';

export default function Checkbox({ border }) {
  return (
    <CheckboxPrimitive.Root
      className={ clsx(
        'w-5',
        'h-5',
        'p-[1px]',
        'bg-gray-100',
        'rounded',
        {
          'border border-black': border,
        },
      ) }
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-4 w-4 text-blue-700" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

Checkbox.defaultProps = {
  border: false,
};

Checkbox.propTypes = {
  border: PropTypes.bool,
};
