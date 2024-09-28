/*-------------------------------- Constants --------------------------------*/
const NumberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equals')
//const calculator = document.querySelector('#calculator')
const displayArea = document.querySelector('.display')
const cashArea = document.querySelector('.numCash')
/*-------------------------------- Variables --------------------------------*/
let insertedNumbers = []
let operator = ''
let result = 0
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const doOperation = () => {
  //console.log(`doOperation ${operator}`)

  for (let i = 0; i < insertedNumbers.length; i++) {
    if (result) {
      switch (operator) {
        case '+':
          result += parseInt(insertedNumbers[i])
          //console.log(insertedNumbers[i])
          break
        case '-':
          result -= parseInt(insertedNumbers[i])
          break
        case '*':
          result *= parseInt(insertedNumbers[i])
          break
        case '/':
          result /= parseInt(insertedNumbers[i])
          break
      }
    } else {
      result = parseInt(insertedNumbers[i])
    }
  }
  displayArea.innerText = result
  result = 0
  insertedNumbers = []
}
/*----------------------------- Event Listeners -----------------------------*/

NumberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let buttonText = event.target.innerText
    displayArea.innerText = displayArea.innerText + buttonText
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.innerText === 'C') {
      displayArea.innerText = ''
      cashArea.innerText = ''
      //console.log(cashArea.innerText)
    } else {
      cashArea.innerText += displayArea.innerText + event.target.innerText
      insertedNumbers.push(displayArea.innerText)
      displayArea.innerText = ''
      operator = event.target.innerText
      //console.log(insertedNumbers)
    }
  })
})

equalButton.addEventListener('click', (event) => {
  cashArea.innerText += displayArea.innerText
  insertedNumbers.push(displayArea.innerText)
  //console.log(insertedNumbers)
  doOperation()
})
// Future logic to capture the button's value would go here...
