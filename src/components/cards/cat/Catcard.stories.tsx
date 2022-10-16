import { ComponentMeta, ComponentStory } from '@storybook/react';
import Catcard, { ICatcard } from './Catcard';
import { mockCatcardProps } from './Catcard.mocks';

export default {
  title: 'templates/Catcard',
  component: Catcard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Catcard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Catcard> = (args) => (
  <Catcard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatcardProps.base,
} as ICatcard;
