import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load input box in contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load button in contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
