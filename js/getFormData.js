'use strict'

export const getFormData = () => {
  const name = form.elements[0].value
  const email = form.elements[1].value
  const comment = form.elements[2].value

  const formData = { name, email, comment }

  return formData
}
