import { css } from 'styled-components';

import { breakpoints } from 'constants/constants';

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