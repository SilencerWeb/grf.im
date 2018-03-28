const css = String.raw;

export const font = {
  family: {
    primary: 'Montserrat, sans-serif',
  },
  size: {
    base: '18px'
  }
};

export const color = {
  primary: '#54a1ff',
  secondary: '#ffffff',

  textPrimary: '#ffffff',
  textSecondary: '#000000',
};

export const transition = '0.3s';

export const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html {
    -ms-overflow-style: scrollbar;
  }
  
  body {
    position: relative;
    min-width: 320px;
    font-family: ${font.family.primary};
    font-size: ${font.size.base};
    color: ${color.textPrimary};
    background-color: ${color.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  a {
    color: ${color.textPrimary};
    text-decoration: none;
    transition: ${transition};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;