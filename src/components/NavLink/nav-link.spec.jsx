import { screen } from '@testing-library/react'
import { NavLink } from '.'
import { renderTheme } from '../../styles/render-theme'
import { links } from './mock'

describe('<NavLink />', () => {
  test('should render <Navlink /> no links', () => {
    renderTheme(<NavLink />)

    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })

  test('should render <NavLink /> with links', () => {
    renderTheme(<NavLink links={links} />)

    expect(screen.queryAllByRole('link')).toHaveLength(links.length)
  })
})
