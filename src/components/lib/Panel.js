import React from 'react';
import PropTypes from 'prop-types';

import config from '../../helpers/config';

const panelStyle = {
  border: '1px solid rgba(33,33,33,0.10)',
  borderRadius: '2px',
  marginTop: '1em',
  padding: '1.5em',
  boxShadow: 'rgb(204, 204, 204) 0px 1px 2px 0px',
  fontSize: '14px',
};

function getStyle(props) {
  let style = {...panelStyle};
  if (props.status === 'error') style.borderLeft = '3px solid red';
  if (props.status === 'success') style.borderLeft = `3px solid ${config().brandColor}`;
  if (props.isClickable) style.cursor = 'pointer';
  return style;
}

let Panel = function Panel(props) {
  const style = getStyle(props);
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Panel.defaultProps = {
  isClickable: false,
  status: null,
};

Panel.props = {
  isClickable: PropTypes.bool,
  status: PropTypes.oneOf(['success', 'error'])
};

export default Panel;
