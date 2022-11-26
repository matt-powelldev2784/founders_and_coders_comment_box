'use strict'
import { formValidationState } from './formValidationState.js'

export const resetInputErrors = () => {
  formValidationState.forEach((input) => {
    input.inputElement.style.border = 'none'
    input.errorElement.style.display = 'none'
  })
}
