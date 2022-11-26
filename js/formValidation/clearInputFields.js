'use strict'
import { formValidationState } from './formValidationState.js'

export const clearInputFields = () => {
  formValidationState.forEach((input) => {
    input.inputElement.value = ''
  })
}
