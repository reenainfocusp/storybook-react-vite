import Button from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',  // This title determines where the story will appear in the Storybook UI
  component: Button,  // Component we are creating the story for
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',  // Centers the component in the Storybook preview panel
  },
  args: {
    children: 'Default Button',  // Default button label
    variant: 'default',  // Default variant
    size: 'default',  // Default size
    width: 'auto',  // Default width
    bgColor: 'default',  // Default background color
  },
};

export default meta;  // This must be the default export

type Story = StoryObj<typeof meta>;

// Default story without overriding any args
export const Default: Story = {};

// Custom story with a destructive variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

// Custom story with an outline variant
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Custom story with a secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Custom story with a ghost variant
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Custom story with a link variant
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Custom story with a small button size
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

// Custom story with a large button size
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Custom story with a red background color
export const RedButton: Story = {
  args: {
    bgColor: 'red',
    children: 'Red Button',
  },
};

// Custom story with a green background color
export const GreenButton: Story = {
  args: {
    bgColor: 'green',
    children: 'Green Button',
  },
};

// Custom story with a yellow background color
export const YellowButton: Story = {
  args: {
    bgColor: 'yellow',
    children: 'Yellow Button',
  },
};
