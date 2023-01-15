import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme, appTheme }) =>
    css`
      color: ${appTheme === 'DARK' ? theme.colors.secondaryColor : theme.colors.primaryColor};
    `}
`
