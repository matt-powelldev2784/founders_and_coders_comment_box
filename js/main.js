'use strict'
import { getFormData } from './getFormData.js'
import { addCommentToDom } from './addCommentToDom.js'
import { countCharacters, textArea } from './countCharacters.js'

const form = document.querySelector('form')
let commentsCounter = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()

  commentsCounter++

  const formData = getFormData()
  const commentFlexItem = document.getElementById('main_flexbox__item2')
  commentFlexItem.style.alignSelf = 'flex-start'
  const commentImage = document.getElementById('comment_box__logo')
  commentImage.style.width = '20%'
  commentImage.style.alignSelf = 'center'
  commentImage.style.padding = '0.5rem'
  commentImage.style.margin = ' 0rem 40%'

  addCommentToDom(formData, commentsCounter)
})

textArea.addEventListener('input', countCharacters)
