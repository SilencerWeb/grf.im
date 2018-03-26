import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from 'ui/molecules';

import { media } from 'ui/mixins';

import { color, transition } from 'ui/theme';

import { logoIcon, logoText } from 'ui/outlines';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.primary ? color.primary : color.secondary};
  
  &:hover {
  
    svg {
      fill: transparent;
    }
  }
  
  svg {
    stroke: ${p => p.primary ? color.primary : color.secondary};
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

export const Logo = (props) => {
  const icon = !props.noIcon ? <Icon icon={ logoIcon }/> : null;
  const text = <Icon icon={ logoText }/>;

  return (
    <Wrapper primary={ props.primary } className={ props.className }>
      <IconWrapper>
        { icon }
      </IconWrapper>
      <TextWrapper>
        { text }
      </TextWrapper>
    </Wrapper>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  noIcon: PropTypes.bool,
};

Logo.defaultProps = {
  className: null,
  primary: false,
  noIcon: false,
};