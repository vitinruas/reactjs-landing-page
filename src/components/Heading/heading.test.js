import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  test('should render <Heading /> with default color value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor)
  })

  test('should render <Heading /> with default font-size value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xmedium)
  })

  test('should render <Heading /> with default text-transform value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('text-transform', 'capitalize')
  })

  test('should render <Heading /> with dark theme', () => {
    renderTheme(<Heading appTheme="DARK">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('color', theme.colors.secondaryColor)
  })

  test('should render <Heading /> with correct small size', () => {
    renderTheme(<Heading titleSize="small">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.medium)
  })

  test('should render <Heading /> with correct medium size', () => {
    renderTheme(<Heading titleSize="medium">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xmedium)
  })

  test('should render <Heading /> with correct big size', () => {
    renderTheme(<Heading titleSize="big">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge)
  })
})
