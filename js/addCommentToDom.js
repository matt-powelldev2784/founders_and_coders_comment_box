'use strict'

export const addCommentToDom = (formData, commentsCounter) => {
  //create container node
  const comments = document.createElement('article')
  comments.classList.add('comments__container')
  comments.setAttribute('id', `comment_number_${commentsCounter}`)

  //create header node
  const commentsHeader = document.createElement('div')
  commentsHeader.classList.add('comment__header')

  //create name node
  const commentName = document.createElement('div')
  commentName.classList.add('comment__name')
  const commentNameString = document.createTextNode(formData.name)
  commentName.appendChild(commentNameString)
  commentsHeader.appendChild(commentName)

  //create time node
  const commentTime = document.createElement('div')
  commentTime.classList.add('comment__time')
  let currentTime = new Date().toLocaleString()
  const commentTimeString = document.createTextNode(currentTime)
  commentTime.appendChild(commentTimeString)
  commentsHeader.appendChild(commentTime)

  //create comment details node
  const commentText = document.createElement('div')
  commentText.classList.add('comment__text')
  const commentTextString = document.createTextNode(formData.comment)
  commentText.appendChild(commentTextString)

  //add nodes to container
  comments.appendChild(commentsHeader)
  comments.appendChild(commentText)

  //add nodes to dom
  const commentsBox = document.querySelector('#comments')
  const lastComment = commentsBox.firstChild
  commentsBox.insertBefore(comments, lastComment)
}
