import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'ui/mixins';

import { color, transition } from 'ui/theme';

const Line = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 4px;
  background-color: ${p => p.blue ? color.primary : color.secondary};
  border: 1px solid ${p => p.blue ? color.primary : color.secondary};
  transition: ${transition};
  
  ${media.down.sm`
    height: 3px;
  `}
`;

const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  padding-top: 12px;
  padding-right: 6px;
  padding-bottom: 12px;
  padding-left: 6px;
  outline: none;
  cursor: pointer;
  
  ${media.down.sm`
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-right: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
  `}
  
  &:hover ${Line} {
    background-color: transparent;
  }
  
  ${p => p.smHidden && css`
    ${media.down.sm`
      display: none;
    `}
    
    ${media.down.xs`
      display: flex;
    `}
  `}
`;

export const Burger = (props) => {
  return (
    <Button smHidden={ props.smHidden }>
      <Line blue={ props.blue }/>
      <Line blue={ props.blue }/>
      <Line blue={ props.blue }/>
    </Button>
  );
};

Burger.propTypes = {
  smHidden: PropTypes.bool,
  blue: PropTypes.bool,
};

Burger.defaultProps = {
  smHidden: false,
  blue: false,
};