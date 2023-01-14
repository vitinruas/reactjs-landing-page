/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import { screen } from '@testing-library/react'
import { Home } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Home />', () => {
  test('Should have styles', () => {
    const { debug } = renderTheme(<Home />)

    const headingParent = screen.getByRole('heading', /hello, world!/i).parentElement

    // expect(heading).toHaveStyle({
    //   background: 'blue',
    //   fontSize: '2rem',
    // })

    expect(headingParent).toHaveStyleRule('background', 'blue')
    expect(headingParent).toHaveStyleRule('font-size', '2rem')
    expect(headingParent).toMatchSnapshot()
  })
})
