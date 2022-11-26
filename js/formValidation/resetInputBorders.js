'use strict'
import { formValidationState } from './formValidationState.js'

const { nameDomElement, emailDomElement, commentDomElement } =
  formValidationState.domElements

export const resetInputBorders = () => {
  nameDomElement.style.border = 'none'
  emailDomElement.style.border = 'none'
  commentDomElement.style.border = 'none'
}
