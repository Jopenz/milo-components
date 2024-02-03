import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
const ImageAvatar = ({ src, size = 50, onPress }) => {
    const styles = StyleSheet.create({
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
    return (React.createElement(TouchableOpacity, { style: styles.container, onPress: onPress },
        React.createElement(Image, { source: { uri: src }, style: styles.image })));
};
const TextAvatar = ({ name, size = 50, backgroundColor, onPress }) => {
    const styles = StyleSheet.create({
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
    return (React.createElement(TouchableOpacity, { style: styles.container, onPress: onPress },
        React.createElement(Text, { style: styles.text }, initials)));
};
const Avatar = ({ onPress, name, size, src, backgroundColor }) => {
    if (src) {
        return React.createElement(ImageAvatar, { src: src, size: size, onPress: onPress });
    }
    return React.createElement(TextAvatar, { name: name, size: size, backgroundColor: backgroundColor, onPress: onPress });
};
export default Avatar;
