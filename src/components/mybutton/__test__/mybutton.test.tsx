import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../mybutton"; // importo mi componente MyButton
describe("MyButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyButton bgcolor="purple" text="Hola pedazo payo" txtcolor="white" bordercolor="red" hverbgcolor="blue" hvertxtcolor="yellow" borderwidth="2" />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});