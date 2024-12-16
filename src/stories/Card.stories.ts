import type { Meta, StoryObj } from '@storybook/react';
import Card from '../component/Card/Card';


const meta: Meta<typeof Card> = {
  title: 'Example/Card',  // This title determines where the story will appear in the Storybook UI
  component: Card,  // Component we are creating the story for
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',  // Centers the component in the Storybook preview panel
  },
  args: {
    title: 'Default Title',
  },
};

export default meta;  // This must be the default export

type Story = StoryObj<typeof meta>;

// Default story without overriding any args
export const Default: Story = {};

// Custom story with a different title and description
export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Title',
  },
};

// Custom story with different background color and text
export const WithCustomBackground: Story = {
  args: {
    title: 'Card with Custom Background',
  },
};