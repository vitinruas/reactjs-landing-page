import P from 'prop-types'
const { Title } = require('./styles')

const Heading = ({
  children,
  appTheme = 'LIGHT',
  titleType = 'h1',
  titleSize = 'medium',
  upperCase = false,
}) => {
  return (
    <header>
      <Title appTheme={appTheme} as={titleType} size={titleSize} uppercase={upperCase}>
        {children}
      </Title>
    </header>
  )
}

Heading.propTypes = {
  children: P.node.isRequired,
  appTheme: P.oneOf(['LIGHT', 'DARK']),
  titleType: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  titleSize: P.oneOf(['small', 'medium', 'big']),
  upperCase: P.bool.isRequired,
}

export { Heading }
