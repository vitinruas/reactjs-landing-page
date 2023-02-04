import { screen } from '@testing-library/react'
import { NavLink } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'
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

  test('should render <NavLink /> with the correct screen size styles', () => {
    renderTheme(<NavLink links={links} />)

    expect(screen.getByText(/link_10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: theme.medias.lteMedium,
      },
    )
  })
})
