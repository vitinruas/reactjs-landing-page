import { screen } from '@testing-library/react'
import { Text } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Text />', () => {
  test('should only render <Text /> with some text', () => {
    renderTheme(<Text>text</Text>)

    const paragraph = screen.getByText('text')

    expect(paragraph).toBeInTheDocument()
  })

  test('should render <Text /> with correct font-size value', () => {
    renderTheme(<Text>text</Text>)

    const paragraph = screen.getByText('text')

    expect(paragraph).toHaveStyleRule('font-size', '2.0rem')
  })
})
