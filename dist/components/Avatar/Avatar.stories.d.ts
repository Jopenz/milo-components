import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: ({ onPress, name, size, src, backgroundColor }: import("./Avatar.types").AvatarProps) => React.JSX.Element;
    argTypes: {
        name: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
        src: {
            control: string;
        };
        size: {
            control: string;
        };
        onPress: {
            action: string;
        };
    };
    args: {
        name: string;
        backgroundColor: string;
        src: string;
        size: number;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, {
        name: string;
        size?: number | undefined;
        backgroundColor: string;
        onPress?: (() => void) | undefined;
        src: string;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
