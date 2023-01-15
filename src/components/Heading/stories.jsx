/* eslint-disable import/no-anonymous-default-export */
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
    appTheme: { type: 'string' },
  },
}

export const LightTemplate = (args) => <Heading {...args} />
export const DarkTemplate = (args) => <Heading {...args} />

LightTemplate.parameters = {
  backgrounds: {
    default: 'light',
  },
}

LightTemplate.args = {
  children: 'Dark text',
  appTheme: 'LIGHT',
}

DarkTemplate.parameters = {
  backgrounds: {
    default: 'dark',
  },
}

DarkTemplate.args = {
  children: 'Light text',
  appTheme: 'DARK',
}
