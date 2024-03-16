import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import Icon from '../Icon/Icon';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary CTA',
    icon: Icon
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Secondary CTA',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    label: 'Outline CTA',
  },
};

export const OutlineFilled: Story = {
  args: {
    type: 'outline-filled',
    label: 'Outline Filled CTA',
  },
};

export const Gradient: Story = {
  args: {
    type: 'gradient',
    label: 'Gradient CTA',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    label: 'Success CTA',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    label: 'Error CTA',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning CTA',
  },
};


