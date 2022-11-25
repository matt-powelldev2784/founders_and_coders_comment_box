export const formValidationState = {
  name: false,
  email: false,
  comment: false,
}

export const updateFormValidationState = (formData) => {
  const { name, email, comment } = formData

  //reset form validation state
  formValidationState.name = false
  formValidationState.email = false
  formValidationState.comment = false

  if (name.length > 0) {
    formValidationState.name = true
  }

  const validEmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(validEmailRegEx)) {
    formValidationState.email = true
  }

  if (comment.length > 0 && comment.length <= 140) {
    formValidationState.comment = true
  }

  console.log('formValidationState', formValidationState)
}
