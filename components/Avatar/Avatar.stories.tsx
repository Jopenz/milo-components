import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Avatar } from './Avatar';

const meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    name: { control: 'text' },
    backgroundColor: { control: 'color' },
    src: { control: 'text' },
    size: { control: 'number' },
    onPress: { action: 'pressed' },
  },
  args: {
    name: 'Jopenz',
    backgroundColor: '#fcba03',
    src: 'https://thispersondoesnotexist.com',
    size: 50,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#ededed' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
