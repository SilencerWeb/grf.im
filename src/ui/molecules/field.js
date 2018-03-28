// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Input, Textarea } from 'ui/atoms';

type props = {
  tag: 'input' | 'textarea',
  className?: string,
  placeholder?: string,
  white?: boolean
};

const Wrapper = styled.div`
  
`;

export const Field = (props: props) => {
  let field;

  if (props.tag) {
    switch (props.tag.toLowerCase()) {
      case 'textarea':
        field = <Textarea placeholder={ props.placeholder }/>;
        break;
    }
  } else {
    field = <Input placeholder={ props.placeholder } white={ props.white }/>;
  }

  return (
    <Wrapper className={ props.className }>
      { field }
    </Wrapper>
  );
};