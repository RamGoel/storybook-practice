import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    type: 'h1',
    weight: 'normal',
    text:'Ram Goel'
  },
};

export const Heading2: Story = {
  args: {
    type: 'h2',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const Heading3: Story = {
  args: {
    type: 'h3',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const Heading4: Story = {
  args: {
    type: 'h4',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const SubHeading1: Story = {
  args: {
    type: 'subheading1',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const SubHeading2: Story = {
  args: {
    type: 'subheading2',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const Paragraph: Story = {
  args: {
    type: 'paragraph',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const Caption: Story = {
  args: {
    type: 'caption',
    weight: 'normal',
    text:'Ram Goel'
  },
}

export const Subtitle: Story = {
  args: {
    type: 'subtitle',
    weight: 'normal',
    text:'Ram Goel'
  },
}


