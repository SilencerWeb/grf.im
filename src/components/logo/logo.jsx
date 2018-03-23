// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Icon } from 'components/icon/icon';

import { media } from 'helpers/helpers';

import { transition } from 'constants/constants';

import logoIcon from 'assets/icons/logo-icon.svg';
import logoText from 'assets/icons/logo-text.svg';

type props = {
  className?: string,
  blue?: boolean,
  noIcon?: boolean
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.blue ? '#54a1ff' : '#ffffff'};
  
  &:hover {
  
    svg {
      fill: transparent;
    }
  }
  
  svg {
    stroke: ${props => props.blue ? '#54a1ff' : '#ffffff'};
    transition: ${transition};
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  
  svg {
    font-size: 40px;
        
    ${media.down.lg`
      font-size: 48px;
     `}
        
    ${media.down.sm`
      font-size: 38px;
     `}
        
    ${media.down.xs`
      font-size: 30px;
     `}
  }
`;

const TextWrapper = styled.div`
  margin-right: 10px;
  
  svg {
    font-size: 28px;
        
    ${media.down.lg`
      font-size: 34px;
     `}
        
    ${media.down.sm`
      font-size: 26px;
     `}
        
    ${media.down.xs`
      font-size: 22px;
    `}
  }
`;

function Logo(props: props) {
  const icon = !props.noIcon ? <Icon icon={ logoIcon }/> : null;
  const text = <Icon icon={ logoText }/>;

  return (
    <Wrapper blue={ props.blue } className={ props.className }>
      <IconWrapper>
        { icon }
      </IconWrapper>
      <TextWrapper>
        { text }
      </TextWrapper>
    </Wrapper>
  );
};

export { Logo };