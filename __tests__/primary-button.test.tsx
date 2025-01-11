import { render, screen } from "@testing-library/react";
import PrimaryButton from "@/components/primary-button";

describe("PrimaryButton", () => {
    it("renders children as button content", () => {
        render(<PrimaryButton onClick={() => {}}>Click Me</PrimaryButton>);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Click Me");
    });
});
