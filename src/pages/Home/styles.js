import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${(props) => {
    return css`
      background: ${props.background};
    `
  }}
`
