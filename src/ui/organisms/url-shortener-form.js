// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Button, Checkbox, Heading, Icon } from 'ui/atoms';
import { Field } from 'ui/molecules';

import { color, transition } from 'ui/theme';

import { breakpoints, media } from 'ui/mixins';

import { cog } from 'ui/outlines';

type props = {
  className?: string
};

type state = {
  showOptions: boolean,
  multipleLinks: boolean
};

const Wrapper = styled.form`
  max-width: 500px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Header = styled.div`
  margin-bottom: 50px;
  
  ${media.down.lg`
    margin-bottom: 40px;
  `} 
`;

const SimplifyHeading = Heading.withComponent('h2');

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  
  ${media.down.lg`
    display: block;
    margin-bottom: 40px;
  `}
  
   ${p => p.block && css`
     display: block;
   `}
`;

const FieldsWrapper = styled.div`
  width: 100%;
  margin-right: 15px;
  
  ${media.down.lg`
    margin-right: 0;
    margin-bottom: 20px;
  `} 
`;

const ButtonWrapper = styled.div`
  margin-top: 5px;
  
  ${media.down.lg`
    margin-top: 0;
  `} 
`;

const FieldWrapper = styled.div`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${p => p.double && css`
    display: flex;
    align-items: center;
  `}
`;

const StyledField = styled(Field)`
  width: 100%;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const FieldLabel = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-top: 3.5px solid ${color.secondary};
  border-right: 3.5px solid transparent;
  border-left: 3.5px solid transparent;
  transition: ${transition};
`;

const OptionsToggler = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-right: 15px;
  margin-bottom: 10px;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity ${transition};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    opacity: 1;
    
    span {
      text-decoration: underline;
    }
    
    ${Triangle} {
      border-top-color: #00ea9b;
      border-bottom-color: #00ea9b;
    }
  }
  
  svg {
    margin-right: 5px;
  }
  
  span {
    font-size: 16px;
  }
  
  ${Triangle} {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  
  ${p => p.toggled && css`

    ${Triangle} {
      border-top: none;
      border-bottom: 3.5px solid ${color.secondary};
      border-right: 3.5px solid transparent;
      border-left: 3.5px solid transparent;
    }
  `}
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const MultipleHeading = Heading.withComponent('span').extend`
  margin-right: 16px;
`;

export class UrlShortenerForm extends React.Component<props, state> {
  state = {
    showOptions: false,
    multipleLinks: false,
  };

  handleOptionsTogglerClick = () => {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  };

  handleCheckboxChange = () => {
    this.setState({
      multipleLinks: !this.state.multipleLinks,
    });
  };

  render() {
    const isDesktop = window.outerWidth > breakpoints.down.lg;
    const buttonText = isDesktop ? 'Go' : 'Shorten URL';

    const optionsToggler = isDesktop ?
      <OptionsToggler toggled={ this.state.showOptions } onClick={ this.handleOptionsTogglerClick }>
        <Icon icon={ cog }/>
        <span>Hide options</span>
        <Triangle/>
      </OptionsToggler> : null;

    const options = this.state.showOptions ?
      <FieldWrapper double>
        <StyledField placeholder={ 'Custom Alias' }/>
        <StyledField placeholder={ 'Password Protect' }/>
      </FieldWrapper> : null;

    const main = this.state.multipleLinks ?
      <Main block>
        <FieldWrapper>
          <FieldLabel>Paste long URLs. One URL per line.</FieldLabel>
          <StyledField tag={ 'textarea' } placeholder={ '| Paste here your list' }/>
        </FieldWrapper>
        <Button wide>{ buttonText }</Button>
      </Main>
      :
      <Main>
        <FieldsWrapper>
          <FieldWrapper>
            <StyledField white={ !isDesktop } placeholder={ '| Paste here long URL' }/>
          </FieldWrapper>
          { optionsToggler }
          { options }
        </FieldsWrapper>
        <ButtonWrapper>
          <Button wide={ !isDesktop }>{ buttonText }</Button>
        </ButtonWrapper>
      </Main>;

    return (
      <Wrapper className={ this.props.className }>
        <Header>
          <SimplifyHeading>Simplify your links</SimplifyHeading>
        </Header>
        { main }
        <Footer>
          <MultipleHeading>Multiple links ?</MultipleHeading>
          <Checkbox onChange={ this.handleCheckboxChange }/>
        </Footer>
      </Wrapper>
    );
  }
}