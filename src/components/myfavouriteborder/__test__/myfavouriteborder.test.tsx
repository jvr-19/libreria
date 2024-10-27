import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder"; // importo mi componente MyButton
describe("MyFavouriteBorder component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavouriteBorder color="red" />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});