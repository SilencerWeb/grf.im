// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { media } from 'helpers/helpers';

import { transition } from 'constants/constants';

type props = {
  children: React.Node,
  blue?: boolean,
  adaptiveWide?: boolean
};

const Wrapper = styled.button`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: 900;
  color: #ffffff;
  background-color: #00ea9b;
  border: solid 1px transparent;
  border-radius: 2px;
  padding-top: 0.5px;
  padding-right: 13.5px;
  padding-bottom: 0.5px;
  padding-left: 13.5px;
  outline: none;
  cursor: pointer;
  transition: ${transition};
  
  &:hover {
    border-color: #ffffff;
  }
  
  ${props => props.blue && css`
    font-size: 20px;
    font-weight: 400;
    background-color: #54a1ff;
    border-radius: 5px;
    padding-top: 23px;
    padding-right: 39.5px;
    padding-bottom: 23px;
    padding-left: 39.5px;
  `}
  
  ${props => props.adaptiveWide && css`
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

function Button(props: props) {
  return (
    <Wrapper blue={ props.blue } adaptiveWide={ props.adaptiveWide }>
      { props.children }
    </Wrapper>
  );
}

export { Button };