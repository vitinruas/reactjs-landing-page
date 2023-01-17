/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import { Home } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Home />', () => {
  test('should render home', () => {
    renderTheme(<Home />)
  })
})
