import * as React from 'react';
import styled from 'styled-components';

type props = {};

const Wrapper = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;

function Container(props: props) {
  return (
    <Wrapper>
      { props.children }
    </Wrapper>
  );
}

export { Container };