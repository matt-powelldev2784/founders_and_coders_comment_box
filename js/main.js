'use strict'
import { getFormData } from './formValidation/getFormData.js'
import { addCommentToDom } from './addCommentToDom.js'
import { countCharacters, textArea } from './formValidation/countCharacters.js'
import { shrinkMainLogo } from './shrinkMainLogo.js'
import { updateFormValidationState } from './formValidation/formValidationState.js'
import { checkFormIsValid } from './formValidation/checkFormIsValid.js'
import { setInvalidInputs } from './formValidation/setInvalidInputs.js'
import { resetInputErrors } from './formValidation/resetInputErrors.js'
import { clearInputFields } from './formValidation/clearInputFields.js'

const form = document.querySelector('form')
let commentsCounter = 0

console.log('window.innerWidth', window.innerWidth)
console.log('window.innerHeight', window.innerHeight)

form.addEventListener('submit', (event) => {
  event.preventDefault()

  resetInputErrors()
  const formData = getFormData()
  updateFormValidationState(formData)
  const formIsValid = checkFormIsValid()

  if (!formIsValid) {
    setInvalidInputs()
  }

  if (formIsValid) {
    commentsCounter++
    shrinkMainLogo()
    addCommentToDom(formData, commentsCounter)
    clearInputFields()
  }
})

textArea.addEventListener('input', countCharacters)
