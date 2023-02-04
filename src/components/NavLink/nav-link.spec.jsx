import { screen } from '@testing-library/react'
import { NavLink } from '.'
import { renderTheme } from '../../styles/render-theme'
import { links } from './mock'

describe('<NavLink />', () => {
  test('should render no links', () => {
    renderTheme(<NavLink />)

    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })
})
