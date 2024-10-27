import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import JavierRR from "../javierrr"; // importo mi componente JavierRR
describe("JavierRR component", () => {
    it('se renderizo correctamente', () => {
        render(<JavierRR text="Prueba" txtcolor="blue" variant="h4"  />);
        
        const textElement = screen.getByText('Prueba');
        expect(textElement).toBeInTheDocument();
    });
});