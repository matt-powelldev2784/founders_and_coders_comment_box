import { formValidationState } from './formValidationState.js'

export const addInputErrorTexts = () => {
  formValidationState.forEach((input) => {
    const errorP = document.createElement('p')
    errorP.classList.add('form__error_p')
    const errorText = document.createTextNode(input.errorMsg)
    errorP.appendChild(errorText)
    input.errorElement.appendChild(errorP)
  })
}
