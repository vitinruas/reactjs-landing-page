import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  @media (min-width: 320px) and (max-width: 480px) {
    html {
      font-size: 75%; // 12
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 81.25%; // 13
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 87.5%; // 14
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    html {
      font-size: 93.75%; // 15
    }
  }

  @media (min-width: 1201) {
    html {
      font-size: 16px; // 16
    }
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) =>
      css`
        ${theme.fonts.family.text}
      `}

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) =>
      css`
        ${theme.fonts.family.title}
      `}
  }
`

export { GlobalStyles }
