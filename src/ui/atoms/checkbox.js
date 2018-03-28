// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from 'ui/theme';

type props = {
  onChange?: Function
}

const Toggler = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 42px;
  height: 22px;
  background-color: ${color.secondary};
  border-radius: 10px;
  
  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    background-color: ${color.primary};
    border-radius: 50%;
    transition: ${transition};
  }
`;

const Wrapper = styled.label`
  cursor: pointer;

  input:checked ~ ${Toggler} {
  
    &:before {
      background-color: #00ea9b;
      transform: translateX(100%);
    }
  }
`;

export const Checkbox = (props: props) => {
  return (
    <Wrapper>
      <input type="checkbox" hidden onChange={ props.onChange }/>
      <Toggler/>
    </Wrapper>
  );
};