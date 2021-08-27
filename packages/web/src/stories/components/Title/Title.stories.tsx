import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Title} from './Title';


export default {
  title: 'COMPONENT | TITLE',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Title',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Title',
};

export const BoxTitle = Template.bind({});
BoxTitle.args = {
  size: 'box-title',
  label: 'Title',
};

export const LargeBoxTitle = Template.bind({});
LargeBoxTitle.args = {
  size: 'large-box-title',
  label: 'Title',
};
export const PageTitle = Template.bind({});
PageTitle.args = {
  size: 'page-title',
  label: 'Title',
};