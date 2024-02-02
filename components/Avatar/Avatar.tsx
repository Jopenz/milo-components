import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export interface AvatarProps extends TextAvatarProps, ImageAvatarProps {}

export interface TextAvatarProps {
  name: string;
  size?: number;
  backgroundColor: string;
  onPress?: () => void;
}

export interface ImageAvatarProps {
  src: string;
  size?: number;
  onPress?: () => void;
}

const ImageAvatar = ({ src, size = 50, onPress }: ImageAvatarProps) => {
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

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: src }} style={styles.image} />
    </TouchableOpacity>
  );
};

const TextAvatar = ({ name, size = 50, backgroundColor, onPress }: TextAvatarProps) => {
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

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{initials}</Text>
    </TouchableOpacity>
  );
};

export const Avatar = ({ onPress, name, size, src, backgroundColor }: AvatarProps) => {
  if (src) {
    return <ImageAvatar src={src} size={size} onPress={onPress} />;
  }

  return <TextAvatar name={name} size={size} backgroundColor={backgroundColor} onPress={onPress} />;
};
