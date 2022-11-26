'use strict'
import { formValidationState } from './formValidationState.js'

export const setInvalidInputs = () => {
  formValidationState.forEach((input) => {
    if (!input.isValid) {
      input.inputElement.style.border = '2px solid red'
      input.errorElement.style.display = 'block'
    }
  })
}
