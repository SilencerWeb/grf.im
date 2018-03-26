import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'ui/mixins';

import { color, transition } from 'ui/theme';

export const Button = styled.button`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: 900;
  color: ${color.textPrimary};
  background-color: #00ea9b;
  border: 1px solid transparent;
  border-radius: 2px;
  padding-top: 0.5px;
  padding-right: 13.5px;
  padding-bottom: 0.5px;
  padding-left: 13.5px;
  outline: none;
  cursor: pointer;
  transition: ${transition};
  
  &:hover {
    border-color: ${color.secondary};
  }
  
  ${p => p.primary && css`
    font-size: 20px;
    font-weight: 400;
    background-color: ${color.primary};
    border-radius: 5px;
    padding-top: 23px;
    padding-right: 39.5px;
    padding-bottom: 23px;
    padding-left: 39.5px;
  `}
  
  ${p => p.adaptiveWide && css`
    ${media.down.lg`
      width: 100%;
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;
      padding-top: 13px;
      padding-right: 13px;
      padding-bottom: 13px;
      padding-left: 13px;
    `}
  
    ${media.down.sm`
      font-size: 14px;
    `}
  `}
`;

Button.propTypes = {
  primary: PropTypes.bool,
  adaptiveWide: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  adaptiveWide: false,
};