import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyButton",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        text: "Button primary",
            txtcolor: 'white',
            bgcolor: 'purple',
            disabled: false,
            size: "small",
            onClick: () => alert("Button Primary"),
            bordercolor:'red',
            hverbgcolor:'blue',
            hvertxtcolor:'yellow',
            borderwidth: '5'
    },
};
export const Secondary: Story = {
    args: {
        text: "Button secondary",
        txtcolor: 'white',
        bgcolor: 'pink',
        disabled: false,
        size: "small",
        onClick: () => alert("Button secondary"),
        bordercolor:'red',
        hverbgcolor:'blue',
        hvertxtcolor:'yellow',
        borderwidth: '5'
    },
}; 