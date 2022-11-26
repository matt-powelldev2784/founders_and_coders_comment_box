'use strict'
export const formValidationState = [
  {
    inputName: 'name',
    isValid: false,
    errorMsg: 'Name is a required field',
    inputElement: form.elements[0],
    errorElement: document.getElementById('form__error_name'),
  },
  {
    inputName: 'email',
    isValid: false,
    errorMsg: 'Email address must be valid',
    inputElement: form.elements[1],
    errorElement: document.getElementById('form__error_email'),
  },
  {
    inputName: 'comment',
    isValid: false,
    errorMsg: 'Comment is a required field',
    inputElement: form.elements[2],
    errorElement: document.getElementById('form__error_comment'),
  },
]

export const updateFormValidationState = (formData) => {
  const { name, email, comment } = formData

  //reset form validation state to default
  formValidationState.forEach((input) => {
    input.isValid = false
  })

  if (name.length > 0) {
    formValidationState[0].isValid = true
  }

  const validEmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(validEmailRegEx)) {
    formValidationState[1].isValid = true
  }

  if (comment.length > 0 && comment.length <= 140) {
    formValidationState[2].isValid = true
  }
}
