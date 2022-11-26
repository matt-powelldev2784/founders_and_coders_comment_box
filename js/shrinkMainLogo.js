'use strict'
export const shrinkMainLogo = () => {
  const commentFlexItem = document.getElementById('main_flexbox__item2')
  commentFlexItem.style.alignSelf = 'flex-start'
  const commentImage = document.getElementById('comment_box__logo')

  const windowWidth = window.innerWidth

  commentImage.style.width = '20%'
  commentImage.style.alignSelf = 'center'
  commentImage.style.padding = '0.5rem'
  commentImage.style.margin = ' 0rem 40%'
}
