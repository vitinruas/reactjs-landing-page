import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.medium};
    color: ${theme.colors.primaryColor};
    position: relative;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
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
