import { ComponentMeta, ComponentStory } from '@storybook/react';
import StaffDashboard, { IStaffDashboard } from './StaffDashboard';
import { mockStaffDashboardProps } from './StaffDashboard.mocks';

export default {
  title: 'utility/StaffDashboard',
  component: StaffDashboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StaffDashboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StaffDashboard> = (args) => (
  <StaffDashboard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStaffDashboardProps.base,
} as IStaffDashboard;
