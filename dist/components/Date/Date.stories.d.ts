import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: (props: import("./Date.types").DateProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    argTypes: {
        day: {
            control: string;
            min: number;
            max: number;
        };
        month: {
            control: string;
        };
    };
    args: {
        day: number;
        month: string;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, {
        day: number;
        month: string;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
