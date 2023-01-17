/* eslint-disable import/no-anonymous-default-export */
import { Heading } from '.'

// default theme and background are setted up as light

export default {
  title: 'Heading',
  component: Heading,
  backgrounds: {
    default: 'light',
  },
  argTypes: {
    children: { name: 'Text', type: 'string', defaultValue: 'Something cool soon...' },
    titleSize: {
      name: 'Title size',
      defaultValue: 'medium',
      options: ['small', 'medium', 'big', 'huge'],
    },
    titleType: {
      name: 'Title type',
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    appTheme: {
      name: 'App theme',
      defaultValue: 'LIGHT',
      options: ['LIGHT', 'DARK'],
    },
    upperCase: {
      name: 'UpperCase mode',
      defaultValue: false,
    },
  },
}

export const LightTemplate = (args) => <Heading {...args} />
export const DarkTemplate = (args) => <Heading {...args} />

DarkTemplate.parameters = {
  backgrounds: {
    default: 'dark',
  },
}

DarkTemplate.args = {
  appTheme: 'DARK',
}
