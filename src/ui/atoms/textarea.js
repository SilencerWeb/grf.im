import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { placeholder } from 'ui/mixins';

import { color } from 'ui/theme';

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 170px;
  color: #4a4a4a;
  background-color: ${color.secondary};
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  resize: vertical;
  outline: none;
  
  ${placeholder`
    color: #4a4a4a;
  `}
`;

Textarea.propTypes = {};

Textarea.defaultProps = {};