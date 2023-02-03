import { screen } from '@testing-library/react'
import { MenuLink } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<MenuLink />', () => {
  test('should only render <MenuLink /> with a text', () => {
    const { container } = renderTheme(<MenuLink link="any_link">any_text</MenuLink>)
    const link = screen.queryByRole('link', { name: /any_text/i })
    expect(link).toBeInTheDocument()
  })
})
