import { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoCard, { IinfoCard } from './InfoCard';
import { mockInfoCardProps } from './InfoCard.mocks';

export default {
  title: 'utility/InfoCard',
  component: InfoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InfoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInfoCardProps.base,
} as IinfoCard;
