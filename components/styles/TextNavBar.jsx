import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TextNavBar({ children, selected }) {
  return (
    <p
      className={ clsx(
        'font-semibold',
        'text-sm',
        {
          'text-gray-800': selected === false,
          'text-green-500': selected === true,
        }
      ) }
    >
      {children}
    </p>
  );
}

TextNavBar.displayName = 'Header.Icon';

TextNavBar.defaultProps = {
  selected: false
};

TextNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.node.bool,
};

export default TextNavBar;