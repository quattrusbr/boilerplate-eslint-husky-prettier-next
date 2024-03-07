import type { Meta, StoryObj } from '@storybook/react';

import { Example2 } from './Example2';

const meta: Meta<typeof Example2> = {
  title: 'toms/Example2',
  component: Example2,
  tags: ['autodocs'],
  args: {
    children: 'Example'
  }
};

export default meta;

type Story = StoryObj<typeof Example2>;

export const Default: Story = {};
