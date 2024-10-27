import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite"; // importo mi componente MyButton
describe("MyFavourite component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavourite color="red" />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});