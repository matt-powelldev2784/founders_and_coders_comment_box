'use strict'
import { formValidationState } from './formValidationState.js'

export const getFormData = () => {
  const formData = {}

  formValidationState.forEach((input) => {
    const inputValue = input.inputElement.value.trim()
    formData[input.inputName] = inputValue
  })

  return formData
}
