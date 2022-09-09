import { Textfield } from './TextField';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import React from 'react';

export default {
  title: 'Textfield',
  component: Textfield,
  argTypes: {
    onChange: {action: true}
  },
};

const Template = (args) => <Textfield {...args} />;

export const Demo = Template.bind({});
Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.type(canvas.getByRole('textbox'),"Hello World");
  await expect(args.onChange).toHaveBeenCalled();
};