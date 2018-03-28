import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const _Icon = (props) => {
  return (
    <svg className={ props.className }>
      <use xlinkHref={ '#' + props.icon.id }/>
    </svg>
  );
};

export const Icon = styled(_Icon)`
  display: inline-block;
  vertical-align: top;
  
  ${props => props.icon && css`
    width: ${props.icon.node.viewBox.animVal.width / props.icon.node.viewBox.animVal.height}em;
    height: 1em;
    font-size: ${props.height || props.icon.node.viewBox.animVal.height}px;
  `};
  
  fill: currentColor;
`;

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};