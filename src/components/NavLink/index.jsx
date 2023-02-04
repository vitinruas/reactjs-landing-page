import P from 'prop-types'
import { MenuLink } from '../MenuLink'
import * as Styled from './styles'

const NavLink = ({ links = [], appTheme = 'LIGHT' }) => {
  return (
    <Styled.Container appTheme={appTheme}>
      {links.map((link) => (
        <MenuLink {...link} appTheme={appTheme} />
      ))}
    </Styled.Container>
  )
}

export { NavLink }

NavLink.propTypes = {
  appTheme: P.oneOf(['LIGHT', 'DARK']),
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
      appTheme: P.oneOf(['DARK', 'LIGHT']),
    }),
  ),
}
