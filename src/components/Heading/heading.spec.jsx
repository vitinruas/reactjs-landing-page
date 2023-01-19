import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  test('should only render <Heading /> with some text', () => {
    renderTheme(<Heading>something cool is coming...</Heading>)

    const heading = screen.getByRole('heading', { name: 'something cool is coming...' })

    expect(heading).toBeInTheDocument()
  })

  test('should render <Heading /> with correct default color value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor)
  })

  test('should render <Heading /> with correct default font-size value', () => {
    renderTheme(<Heading>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xmedium)
  })

  test('should render <Heading /> with correct default text-transform value', () => {
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

  test('should render <Heading /> with correct element', () => {
    renderTheme(<Heading titleType="h3">text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading.tagName.toLowerCase()).toBe('h3')
  })

  test('should render <Heading /> with correct text-transform configuration', () => {
    renderTheme(<Heading upperCase={true}>text</Heading>)

    const heading = screen.getByRole('heading', { name: 'text' })

    expect(heading).toHaveStyleRule('text-transform', 'uppercase')
  })
})
