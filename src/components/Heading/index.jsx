const { Title } = require('./styles')

const Heading = ({ children, appTheme }) => {
  return (
    <header>
      <Title appTheme={appTheme}>{children}</Title>
    </header>
  )
}

export { Heading }
