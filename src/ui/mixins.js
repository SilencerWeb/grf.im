const css = String.raw;

export const breakpoints = {
  up: {
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1280,
  },
  down: {
    xs: 577,
    sm: 767,
    md: 1023,
    lg: 1279,
  },
};

export const media = {
  up: {
    xs: (...args) => css`
    @media (min-width: ${breakpoints.up.xs}px) {
      ${ css(...args) }
    }
  `,
    sm: (...args) => css`
    @media (min-width: ${breakpoints.up.sm}px) {
      ${ css(...args) }
    }
  `,
    md: (...args) => css`
    @media (min-width: ${breakpoints.up.md}px) {
      ${ css(...args) }
    }
  `,
    lg: (...args) => css`
    @media (min-width: ${breakpoints.up.lg}px) {
      ${ css(...args) }
    }
  `,
  },
  down: {
    xs: (...args) => css`
    @media (max-width: ${breakpoints.down.xs}px) {
      ${ css(...args) }
    }
  `,
    sm: (...args) => css`
    @media (max-width: ${breakpoints.down.sm}px) {
      ${ css(...args) }
    }
  `,
    md: (...args) => css`
    @media (max-width: ${breakpoints.down.md}px) {
      ${ css(...args) }
    }
  `,
    lg: (...args) => css`
    @media (max-width: ${breakpoints.down.lg}px) {
      ${ css(...args) }
    }
  `,
  },
};

export const placeholder = (...args) => css`
  &::placeholder {
    ${ css(...args) }
  }

  &::-webkit-input-placeholder {
    ${ css(...args) }
  }

  &:-moz-placeholder {
    ${ css(...args) }
  }

  &::-moz-placeholder {
    ${ css(...args) }
  }

  &:-ms-input-placeholder {
    ${ css(...args) }
  }
`;