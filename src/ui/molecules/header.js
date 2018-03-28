// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from 'ui/atoms';
import { Logo, Burger } from 'ui/molecules';

type props = {
  className?: string,
  primary?: boolean
};

const Wrapper = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = (props: props) => {
  return (
    <Wrapper className={ props.className }>
      <Container>
        <Inner>
          <a href="">
            <Logo primary={ props.primary }/>
          </a>
          <Burger smHidden primary={ props.primary }/>
        </Inner>
      </Container>
    </Wrapper>
  );
};