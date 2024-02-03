import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import Date from './Date';

const meta = {
  title: 'Date',
  component: Date,
  argTypes: {
    day: { control: 'number', min: 1, max: 31 },
    month: { control: 'text' },
  },
  args: {
    day: 5,
    month: 'Jan',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#ededed' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Date>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
