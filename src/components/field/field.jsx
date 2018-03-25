// @flow
import * as React from 'react';
import styled from 'styled-components';

import { placeholder } from 'helpers/helpers';

import { transition } from 'constants/constants';

type props = {
  placeholder?: string
};

const Wrapper = styled.input`
    width: 100%;
    font-size: 18px;
    color: #ffffff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    border-radius: 1px;
    padding-bottom: 6px;
    outline: none;
    transition: ${transition};
    
    &:hover {
      border-bottom-color: #00ea9b;
    }
    
    ${placeholder`
      color: #ffffff;
    `}
  `;

export const Field = (props: props) => {
  return (
    <Wrapper placeholder={ props.placeholder }/>
  );
};