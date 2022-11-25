import { formValidationState } from './updateFormValidationState.js'

export const checkFormIsValid = () => {
  let isValid = true
  for (const field in formValidationState) {
    if (formValidationState[field] === false) {
      isValid = false
    }
  }
  return isValid
}
