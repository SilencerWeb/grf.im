import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from 'ui/theme';

export const Link = styled.a.attrs({
  href: p => p.href,
})`
  font-weight: 500;
  text-decoration: none;
  color: ${color.textPrimary};
  transition: ${transition};
  
  &:hover {
    text-decoration: underline;
  }
`;

Link.propTypes = {};

Link.defaultProps = {};