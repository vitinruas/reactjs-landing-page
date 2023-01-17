import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  test('should render heading with default color value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor)
  })

  test('should render heading with default font-size value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.large)
  })

  test('should render heading with default text-transform value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('text-transform', 'capitalize')
  })

  test('should render heading with dark theme', () => {
    renderTheme(<Heading appTheme="DARK">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('color', theme.colors.secondaryColor)
  })
})
