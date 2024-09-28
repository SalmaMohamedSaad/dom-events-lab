/*-------------------------------- Constants --------------------------------*/
const NumberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equals')
//const calculator = document.querySelector('#calculator')
const displayArea = document.querySelector('.display')
// A new html element to display the full operation apart from the result to be able to operate on more than two numbers
const cashArea = document.querySelector('.numCash')
/*-------------------------------- Variables --------------------------------*/
let insertedNumbers = []
let operator = ''
let result = 0
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const doOperation = () => {
  for (let i = 0; i < insertedNumbers.length; i++) {
    // checking if the first value has been added yet so we can start the operation
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
      //set the variable result with the first number input so we can operate on it in the next iteration
      result = parseInt(insertedNumbers[i])
    }
  }
  displayArea.innerText = result
  // Prepare our calculator to the next operation by removing all the last operation stored values
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
