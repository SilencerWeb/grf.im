import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { placeholder } from 'ui/mixins';

import { font, color, transition } from 'ui/theme';

export const Input = styled.input`
  width: 100%;
  font-size: ${font.size.base};
  color: ${color.textPrimary};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${color.secondary};
  border-radius: 1px;
  padding-bottom: 6px;
  outline: none;
  transition: ${transition};
  
  &:hover {
    border-bottom-color: #00ea9b;
  }
  
  ${placeholder`
    font-size: ${font.size.base};
    color: ${color.textPrimary};
  `}
  
  ${p => p.white && css`
    color: ${color.primary};
    background-color: ${color.secondary};
    border: none;
    border-radius: 2px;
    padding-top: 13px;
    padding-right: 10px;
    padding-bottom: 13px;
    padding-left: 10px;
    
    ${placeholder`
      color: ${color.primary};
    `}
  `}
`;

Input.propTypes = {
  white: PropTypes.bool,
};

Input.defaultProps = {
  white: false,
};