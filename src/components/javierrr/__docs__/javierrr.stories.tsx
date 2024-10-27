import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "JavierRR",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Default: Story = {
    args: {
        text: "Texto por defecto",
        txtcolor: 'black',
        variant: 'body1',
    },
};
export const Primary: Story = {
    args: {
        text: "Texto Primario",
        txtcolor: 'blue',
        variant: 'h4',
    },
}; 