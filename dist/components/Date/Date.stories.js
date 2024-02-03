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
        (Story) => (React.createElement(View, { style: { padding: 16, backgroundColor: '#ededed' } },
            React.createElement(Story, null))),
    ],
};
export default meta;
export const Basic = {};
