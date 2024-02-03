import React from 'react';
import { View } from 'react-native';
import Avatar from './Avatar';
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
        (Story) => (React.createElement(View, { style: { padding: 16, backgroundColor: '#ededed' } },
            React.createElement(Story, null))),
    ],
};
export default meta;
export const Basic = {};
