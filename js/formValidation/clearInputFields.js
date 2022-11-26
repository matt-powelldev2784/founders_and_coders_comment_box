'use strict'
import { formValidationState } from './formValidationState.js'

export const clearInputFields = () => {
  formValidationState.forEach((input) => {
    input.inputElement.value = ''
  })

  // const { nameInput, emailInput, commentInput } =
  //   formValidationState.inputElements

  // nameInput.value = ''
  // emailInput.value = ''
  // commentInput.value = ''
}
