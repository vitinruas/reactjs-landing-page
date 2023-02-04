import { NavLink } from '.'
import { links } from './mock.js'

const stories = {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argTypes: {
    appTheme: {
      name: 'App theme',
      defaultValue: 'LIGHT',
      options: ['LIGHT', 'DARK'],
    },
  },
}

export const LightTemplate = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  )
}

export const DarkTemplate = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  )
}

DarkTemplate.parameters = {
  backgrounds: {
    default: 'dark',
  },
}

DarkTemplate.args = {
  appTheme: 'DARK',
}

export default stories
