'use strict'
import { formValidationState } from './formValidationState.js'

export const checkFormIsValid = () => {
  let formIsValid = true

  formValidationState.forEach((input) => {
    if (input.isValid === false) {
      formIsValid = false
    }
  })
  return formIsValid
}
