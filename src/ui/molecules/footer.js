// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Container, Link } from 'ui/atoms';
import { Burger } from 'ui/molecules';

import { media } from 'ui/mixins';

type props = {
  className?: string
};

const Wrapper = styled.footer`
  font-weight: 500;
  padding-top: 26px;
  padding-bottom: 26px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  ${media.down.sm`
    align-items: center;
  `}
`;

const Copyright = styled.div`
  writing-mode: tb-rl;
  transform: rotate(180deg);
  
  ${media.down.lg`
    writing-mode: initial;
  `}
  
  p {
    margin-right: 0;
    margin-left: 0;
    
    ${media.down.lg`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;
    `}
    
    ${media.down.sm`
      display: block;
    `}
    
    span {
    
      &:last-child {
        
        ${media.down.sm`
          display: none;
        `}
      }
    }
  }
  
  ${media.down.lg`
    width: 100%;
    transform: rotate(0deg);
  `}
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  
  ${Link} {
    margin-left: 15px;
    
    &:last-child {
      margin-left: 0;
    }
  }
  
  ${media.down.lg`
    display: none;
    writing-mode: initial;
  `}
`;

const StyledBurger = styled(Burger)`
  display: none;

  ${media.down.sm`
    display: flex;
  `}

  ${media.down.xs`
     display: none;
  `}
`;

export const Footer = (props: props) => {
  return (
    <Wrapper className={ props.className }>
      <Container>
        <Inner>
          <Copyright>
            <p>
              <span>2017-2018 © GRF.IM.</span>
              <span>All rights reserved.</span>
            </p>
          </Copyright>
          <Links>
            <Link href={ '#' }>Contact</Link>
            <Link href={ '#' }>Developer</Link>
            <Link href={ '#' }>Terms and Conditions</Link>
          </Links>
          <StyledBurger/>
        </Inner>
      </Container>
    </Wrapper>
  );
};