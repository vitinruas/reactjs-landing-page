import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
  `}
`
