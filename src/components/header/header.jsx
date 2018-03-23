// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Container } from 'components/container/container';
import { Logo } from 'components/logo/logo';
import { Burger } from 'components/burger/burger';

type props = {
  blue?: boolean
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

function Header(props: props) {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <a href="#">
            <Logo blue={ props.blue }/>
          </a>
          <Burger smHidden blue={ props.blue }/>
        </Inner>
      </Container>
    </Wrapper>
  );
}

export { Header };