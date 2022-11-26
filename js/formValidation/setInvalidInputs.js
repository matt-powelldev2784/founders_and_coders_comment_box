'use strict'
import { formValidationState } from './formValidationState.js'
import { addInputErrorTexts } from './addInputErrorTexts.js'

let inputErrorTextsHasBeenAdded = false

export const setInvalidInputs = () => {
  if (!inputErrorTextsHasBeenAdded) {
    addInputErrorTexts()
    inputErrorTextsHasBeenAdded = true
  }

  formValidationState.forEach((input) => {
    if (!input.isValid) {
      input.inputElement.style.border = '2px solid red'
      input.errorElement.style.display = 'block'
    }
  })
}
