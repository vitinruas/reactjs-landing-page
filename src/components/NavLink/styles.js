import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme, appTheme }) => css`
    background: ${appTheme === 'DARK' ? theme.colors.secondaryColor : theme.colors.primaryColor};
    display: flex;
    flex-flow: wrap row;

    @media ${theme.medias.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`
