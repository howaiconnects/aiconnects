import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FiArrowRight } from 'react-icons/fi';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Ghost: Story = { args: { variant: 'ghost' } };
export const WithIcon: Story = {
  args: {
    icon: <FiArrowRight />,
    children: 'Continue'
  }
};
