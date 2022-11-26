'use strict'
import { formValidationState } from './formValidationState.js'

export const checkFormIsValid = () => {
  let isValid = true
  for (const field in formValidationState) {
    if (formValidationState[field].isValid === false) {
      isValid = false
    }
  }
  return isValid
}
