import P from 'prop-types'
import * as Styled from './styles'

const Text = ({ children, appTheme = 'LIGHT' }) => {
  return <Styled.Container appTheme={appTheme}>{children}</Styled.Container>
}

export { Text }

Text.propTypes = {
  children: P.node.isRequired,
  appTheme: P.oneOf(['LIGHT', 'DARK']),
}
