import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("Contact Us Page", () => {
  it("should Contact Us page is load or not", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should button inside component or not", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should button get by text", () => {
    render(<ContactUs />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should find input tags", () => {
    render(<ContactUs />);
    const inputName = screen.getByPlaceholderText("Name");
    const inputMessage = screen.getByPlaceholderText("Message");
    expect(inputName).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });

  it("should find two inupt box are in our compoennt", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
