import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyFavourite",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        color: "red",
        disabled: false,
        onClick: () => alert("Button Primary"),

    },
};
export const Secondary: Story = {
    args: {
        color: "yellow",
        disabled: false,
        onClick: () => alert("Button secondary"),
    },
}; 