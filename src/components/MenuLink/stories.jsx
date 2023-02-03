import { MenuLink } from '.'

const stories = {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}

export default stories
