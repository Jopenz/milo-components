"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const ImageAvatar = ({ src, size = 50, onPress }) => {
    const styles = react_native_1.StyleSheet.create({
        container: {
            borderWidth: 2,
            width: size,
            height: size,
            borderColor: 'white',
            borderRadius: size / 2,
        },
        image: {
            width: '100%',
            height: '100%',
            borderRadius: size / 2,
        },
    });
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.container, onPress: onPress },
        react_1.default.createElement(react_native_1.Image, { source: { uri: src }, style: styles.image })));
};
const TextAvatar = ({ name, size = 50, backgroundColor, onPress }) => {
    const styles = react_native_1.StyleSheet.create({
        container: {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'white',
        },
        text: {
            color: 'white',
            fontSize: size / 2,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    });
    const initials = name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .toUpperCase();
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.container, onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, initials)));
};
const Avatar = ({ onPress, name, size, src, backgroundColor }) => {
    if (src) {
        return react_1.default.createElement(ImageAvatar, { src: src, size: size, onPress: onPress });
    }
    return react_1.default.createElement(TextAvatar, { name: name, size: size, backgroundColor: backgroundColor, onPress: onPress });
};
exports.default = Avatar;
