import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Monalisa } from './Monalisa';

export default {
  title: 'Example/Monalisa',
  component: Monalisa,
  args: {
    screen: "61e1532b4cdb8cfa375286da"
  },

} as ComponentMeta<typeof Monalisa>;

const Template: ComponentStory<typeof Monalisa> = (args) => <Monalisa {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  screen: "61e1532b4cdb8cfa375286da",
};

