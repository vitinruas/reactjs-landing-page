import { Text } from '.'

const stories = {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Provident odit possimus quas hic praesentium vitae id illum blanditiis nam ex,
    deserunt quibusdam repellendus consequatur facilis totam doloribus a, sint sunt!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  )
}

export default stories
