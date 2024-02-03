"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const Avatar_1 = require("./Avatar");
const meta = {
    title: 'Avatar',
    component: Avatar_1.default,
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
        (Story) => (react_1.default.createElement(react_native_1.View, { style: { padding: 16, backgroundColor: '#ededed' } },
            react_1.default.createElement(Story, null))),
    ],
};
exports.default = meta;
exports.Basic = {};
