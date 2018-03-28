import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color } from 'ui/theme';

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${color.textPrimary};
  margin-top: 0;
  margin-bottom: 0;
  
  ${p => p.lg && css`
    font-size: 39px;
  `}
`;

Heading.propTypes = {
  lg: PropTypes.bool,
};

Heading.defaultProps = {
  lg: false,
};