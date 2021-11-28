import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../components/Button"

it('Button element visible', () => {
  render(<Button />)
  expect(screen.getByTestId("button")).toBeVisible()
})

it('Allows me to click in the button', () => {
  render(<Button />)
  userEvent.click(screen.getByTestId("button"))
})