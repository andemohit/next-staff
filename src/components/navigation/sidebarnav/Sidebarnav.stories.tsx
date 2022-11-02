import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebarnav, { ISidebarnav } from './Sidebarnav';
import { mockSidebarnavProps } from './Sidebarnav.mocks';

export default {
  title: 'layouts/Sidebarnav',
  component: Sidebarnav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Sidebarnav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebarnav> = (args) => (
  <Sidebarnav {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarnavProps.base,
} as ISidebarnav;
