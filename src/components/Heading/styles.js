import styled, { css } from 'styled-components'

const themeColor = (theme, appTheme) =>
  css`
    color: ${appTheme === 'DARK' ? theme.colors.secondaryColor : theme.colors.primaryColor};
  `

const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.medium};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.large};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xlarge};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.big};
    `,
}

const titleUpperCase = (uppercase) =>
  css`
    text-transform: ${uppercase ? 'uppercase' : 'capitalize'};
  `

export const Title = styled.h1`
  ${({ theme, appTheme, size, uppercase }) =>
    css`
      ${themeColor(theme, appTheme)}
      ${titleSize[size](theme)};
      ${titleUpperCase(uppercase)}
    `}
`
