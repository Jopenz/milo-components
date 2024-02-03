"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
require("@fontsource-variable/onest");
const Date = (props) => {
    const { day, month } = props;
    const styles = react_native_1.StyleSheet.create({
        container: {
            width: 60,
            height: 65,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 5,
        },
        day: {
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: "'Onest Variable', sans-serif",
            color: '#2A2A2A',
        },
        month: {
            fontFamily: "'Onest Variable', sans-serif",
            fontSize: 15,
            fontWeight: '600',
            color: '#2A2A2A',
        },
    });
    const formatNumber = (num) => {
        if (num >= 1 && num <= 9) {
            return `0${num}`;
        }
        else {
            return num.toString();
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.day }, formatNumber(day)),
        react_1.default.createElement(react_native_1.Text, { style: styles.month }, month.slice(0, 3))));
};
exports.default = Date;
