'use strict'
import { getFormData } from './getFormData.js'
import { addCommentToDom } from './addCommentToDom.js'
import { countCharacters, textArea } from './countCharacters.js'
import { shrinkMainLogo } from './shrinkMainLogo.js'
import { updateFormValidationState } from './updateFormValidationState.js'
import { checkFormIsValid } from './checkFormIsValid.js'
import { setInvalidInputs } from './setInvalidInputs.js'

const form = document.querySelector('form')
let commentsCounter = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()

  commentsCounter++

  const formData = getFormData()
  updateFormValidationState(formData)
  const formIsValid = checkFormIsValid()
  console.log('formIsValid', formIsValid)

  if (!formIsValid) {
    setInvalidInputs()
  }

  if (formIsValid) {
    shrinkMainLogo()
    addCommentToDom(formData, commentsCounter)
    //TODO
    //clear inputs
  }
})

textArea.addEventListener('input', countCharacters)
