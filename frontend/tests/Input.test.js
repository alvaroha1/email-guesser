import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../components/Button"
import InputField from "../components/InputField"

it('Input Field element visible', () => {
  render(<InputField />)
  expect(screen.getByTestId("input-field")).toBeVisible()
})

it('Allows me to type my first name in the input field', () => {
  render(<InputField />)
  userEvent.type(screen.getByTestId("input-field"), "First Name")
})