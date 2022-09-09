import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textfield } from './TextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CatDeliveryService/Textfield',
  component: Textfield,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof Textfield>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textfield> = (args) => <Textfield {...args} />;


// More on args: https://storybook.js.org/docs/react/writing-stories/args


export const CatSays = Template.bind({});
CatSays.args = {
    id: "cat-says",
    label:"What does the Cat say?",
    placeholder: "Hello",
};

export const CatColour = Template.bind({});
CatColour.args = {
    id: "cat-colour",
    label:"Colour of the text?",
    placeholder: "Aquamarine",
};

export const CatSize = Template.bind({});
CatSize.args = {
    id: "cat-size",
    label:"Size of the text? (in pixels)",
    placeholder: "200",
};

export const CatTags = Template.bind({});
CatTags.args = {
    id: "cat-tags",
    label:"Optional: Tags",
    placeholder: "Cool",
};