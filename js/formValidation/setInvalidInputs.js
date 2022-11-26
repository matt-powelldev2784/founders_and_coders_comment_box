'use strict'
import { formValidationState } from './formValidationState.js'

const { nameDomElement, emailDomElement, commentDomElement } =
  formValidationState.domElements

export const setInvalidInputs = () => {
  if (!formValidationState.name.isValid) {
    nameDomElement.style.border = '1px solid red'
  }
  if (!formValidationState.email.isValid) {
    emailDomElement.style.border = '1px solid red'
  }
  if (!formValidationState.comment.isValid) {
    commentDomElement.style.border = '1px solid red'
  }
}
