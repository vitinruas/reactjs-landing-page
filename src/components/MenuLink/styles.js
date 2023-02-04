import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.a`
  ${({ theme, appTheme }) => css`
    display: block;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.medium};
    color: ${appTheme === 'DARK' ? theme.colors.primaryColor : theme.colors.secondaryColor};
    position: relative;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 8px;
      transform: translateX(-50%);
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.tertiaryColor};
      transition: all 0.5s;
    }
    &:hover::after {
      width: 50%;
    }
  `}
`
