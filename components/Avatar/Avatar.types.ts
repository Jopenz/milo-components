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
