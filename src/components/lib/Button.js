import React from 'react';
import PropTypes from 'prop-types';
import BootstrapButton from 'react-bootstrap/Button';

const Button = function Button(props) {
  return (
    <BootstrapButton
      {...props}
    />
  );
};

const defaultStyles = {
  borderRadius: '0em',
  padding: '0.5em',
  paddingRight: '1em',
  paddingLeft: '1em',
  fontWeight: 'bold',
};

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  style: defaultStyles,
  size: 'md',
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
}

export default Button;
