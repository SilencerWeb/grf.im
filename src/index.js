import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'styled-components';

import { Container } from 'ui/atoms';
import { Header, Footer } from 'ui/molecules';
import { UrlShortenerForm } from 'ui/organisms';

import { media } from 'ui/mixins';

import { globalStyles } from 'ui/theme';

import nomralize from 'normalize.css/normalize.css';

injectGlobal`${nomralize} ${globalStyles}`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundSign = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  vertical-align: top;
  font-size: 350px;
  font-weight: 800;
  writing-mode: tb-rl;
  text-transform: uppercase;
  opacity: 0.1;
  transform: rotate(180deg);
  
  ${media.down.lg`
    font-size: 300px;
  `}
  
  ${media.down.sm`
    font-size: 200px;
  `}
  
  ${media.down.xs`
    right: 50%;
    font-size: 250px;
    transform: translateX(50%) rotate(180deg);
  `}
`;

const AbsoluteHeader = styled(Header)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

const RelativeUrlShortenerForm = styled(UrlShortenerForm)`
  position: relative;
  z-index: 1;
`;

const AbsoluteFooter = styled(Footer)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

ReactDOM.render(
  (
    <Wrapper>
      <BackgroundSign>GRF.IM</BackgroundSign>
      <AbsoluteHeader/>
      <Container>
        <RelativeUrlShortenerForm/>
      </Container>
      <AbsoluteFooter/>
    </Wrapper>
  ),
  document.getElementById('root'),
);