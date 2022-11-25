export let textArea = document.getElementById('message')
let characterCounter = document.getElementById('form__char_count')
const maxNumOfChars = 140

export const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length
  characterCounter.textContent = `${numOfEnteredChars} /140`
}
