'use strict'
export const formValidationState = {
  domElements: {
    nameDomElement: form.elements[0],
    emailDomElement: form.elements[1],
    commentDomElement: form.elements[2],
  },
  name: {
    isValid: false,
    errorMsg: 'Name is a required Field',
  },
  email: {
    isValid: false,
    errorMsg: 'Email address must be valid',
  },
  comment: {
    isValid: false,
    errorMsg: 'Comment is a required Field',
  },
}

export const updateFormValidationState = (formData) => {
  const { name, email, comment } = formData

  //reset form validation state
  formValidationState.name.isValid = false
  formValidationState.email.isValid = false
  formValidationState.comment.isValid = false

  if (name.length > 0) {
    formValidationState.name.isValid = true
  }

  const validEmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(validEmailRegEx)) {
    formValidationState.email.isValid = true
  }

  if (comment.length > 0 && comment.length <= 140) {
    formValidationState.comment.isValid = true
  }
}
