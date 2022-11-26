'use strict'
import { formValidationState } from './formValidationState.js'

export const clearInputFields = () => {
  const { nameDomElement, emailDomElement, commentDomElement } =
    formValidationState.domElements

  nameDomElement.value = ''
  emailDomElement.value = ''
  commentDomElement.value = ''
}
