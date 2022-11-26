'use strict'
import { formValidationState } from './formValidationState.js'

export const getFormData = () => {
  const { nameDomElement, emailDomElement, commentDomElement } =
    formValidationState.domElements

  const name = nameDomElement.value
  const email = emailDomElement.value
  const comment = commentDomElement.value

  const formData = { name, email, comment }

  return formData
}
