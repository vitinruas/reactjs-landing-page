import P from 'prop-types'
import * as Styled from './styles'

const MenuLink = ({ children, appTheme = 'LIGHT', link, newTab }) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <Styled.Container appTheme={appTheme} href={link} target={target}>
      {children}
    </Styled.Container>
  )
}

export { MenuLink }

MenuLink.propTypes = {
  children: P.node.isRequired,
  appTheme: P.oneOf(['LIGHT', 'DARK']),
  link: P.string.isRequired,
  newTab: P.bool,
}
