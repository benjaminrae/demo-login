import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const buttonText = "Button";
  const buttonName = /button/i;

  describe("When it is rendered with children 'Button'", () => {
    test("Then it should show a button on the screen with text 'Button'", () => {
      render(<Button>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", {
        name: buttonName,
      });

      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and it receives an onClick function", () => {
    test("Then the received function should be invoked when the user clicks the button", async () => {
      const onClickAction = jest.fn();

      render(<Button onClick={onClickAction}>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", { name: buttonName });

      await userEvent.click(renderedButton);

      expect(onClickAction).toHaveBeenCalled();
    });
  });

  describe("When it receives disabled with the value true", () => {
    test("Then it should show a disabled button", () => {
      render(<Button disabled={true}>{buttonText}</Button>);
      const renderedButton = screen.getByRole("button", { name: buttonName });

      expect(renderedButton).toBeDisabled();
    });
  });
});
