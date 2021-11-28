import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../components/Button"
import InputField from "../components/InputField"

it('allows me to type my first name', () => {
  render(<InputField />)

  userEvent.type(screen.getByTestId("input-field"), "First Name")
})