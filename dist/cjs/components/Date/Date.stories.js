"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const Date_1 = require("./Date");
const meta = {
    title: 'Date',
    component: Date_1.default,
    argTypes: {
        day: { control: 'number', min: 1, max: 31 },
        month: { control: 'text' },
    },
    args: {
        day: 5,
        month: 'Jan',
    },
    decorators: [
        (Story) => (react_1.default.createElement(react_native_1.View, { style: { padding: 16, backgroundColor: '#ededed' } },
            react_1.default.createElement(Story, null))),
    ],
};
exports.default = meta;
exports.Basic = {};
