import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { placeholder } from 'ui/mixins';

import { color, transition } from 'ui/theme';

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
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
    color: ${color.textPrimary};
  `}
`;

Input.propTypes = {};

Input.defaultProps = {};