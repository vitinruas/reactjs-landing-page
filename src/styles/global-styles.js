import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    ${(props) => {
      return css`
        background: ${props.theme.colors.primaryBg};
      `
    }}
  }
`

export { GlobalStyles }
