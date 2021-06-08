// APR input
const aprInput = document.querySelector('#apr')
// APR span error message
const aprSpanErrorMessage = document.querySelector('#aprErrorMessage')

// TERM input
const termInput = document.querySelector('#term')
// TERM span error message
const termSpanErrorMessage = document.querySelector('#termErrorMessage')

// AMOUNT input
const amountInput = document.querySelector('#amount')
// AMOUNT span error message
const amountErrorMessage = document.querySelector('#amountErrorMessage')

// PAYMENT input
const paymentInput = document.querySelector('#payment')

// Reset button
const resetButton = document.querySelector('#clear')

// Calculate button
const calculateButton = document.querySelector('#calculate')

// APR input event listener
aprInput.addEventListener('keyup', event => {
    if (!isValidAPRValue(aprInput.value)) {
        showErrors(aprInput, aprSpanErrorMessage)
    } else {
        removeErrors(aprInput, aprSpanErrorMessage)
    }
})

// TERM input event listener
termInput.addEventListener('keyup', event => {
    if (!isValidTERMValue(termInput.value)) {
        showErrors(termInput, termSpanErrorMessage)
    } else {
        removeErrors(termInput, termSpanErrorMessage)
    }
})

// AMOUNT input event listener
amountInput.addEventListener('keyup', event => {
    if (!isValidAMOUNTValue(amountInput.value)) {
        showErrors(amountInput, amountErrorMessage)
    } else {
        removeErrors(amountInput, amountErrorMessage)
    }
})

// Reset button event listener
resetButton.addEventListener('click', event => {
    event.preventDefault()
    resetInputs()
})

// Calculate button event listener
calculateButton.addEventListener('click', event => {
    event.preventDefault()
    calculateMortgage()
})

// Is Valid APR value
function isValidAPRValue(apr) {
    // Must allow floating point values between 0 and 25.00 % .
    return apr >= 0 && apr <= 25.00 && apr != ''
}

// Is Valid TERM value
function isValidTERMValue(term) {
    // Must be > zero and less than or equal to 40.
    return term > 0 && term <= 40 && term != ''
}

// Is Valid AMOUNT value
function isValidAMOUNTValue(amount) {
    return amount != '' && /^\d*$/.test(amount)
}

// Display errors on provided InputField, and the error message
function showErrors(InputField, SpanErrorField) {
    InputField.classList.replace('focus:ring-blue-600', 'focus:ring-red-600')
    InputField.classList.replace('border-blue-300', 'border-red-600')
    SpanErrorField.classList.remove('hidden')
}

// Remove errors on provided InputField, and the error message
function removeErrors(InputField, SpanErrorField) {
    InputField.classList.replace('focus:ring-red-600', 'focus:ring-blue-600')
    InputField.classList.replace('border-red-600', 'border-blue-300')
    SpanErrorField.classList.add('hidden')
}

// Reset inputs
function resetInputs() {
    aprInput.value = ''
    termInput.value = ''
    amountInput.value = ''
    paymentInput.value = ''

    removeErrors(aprInput, aprSpanErrorMessage)
    removeErrors(termInput, termSpanErrorMessage)
    removeErrors(amountInput, amountErrorMessage)
}

// Calculate mortgage
function calculateMortgage() {
    if (isValidAPRValue(aprInput.value) && isValidTERMValue(termInput.value) && isValidAMOUNTValue(amountInput.value)) {
        /******** FIX formula */
        paymentInput.value = Number.parseFloat(aprInput.value).toFixed(2) * Number.parseFloat(termInput.value).toFixed(2) * Number.parseFloat(amountInput.value).toFixed(2)
    } else {
        !isValidAPRValue(aprInput.value) ? showErrors(aprInput, aprSpanErrorMessage) : removeErrors(aprInput, aprSpanErrorMessage)
        !isValidTERMValue(termInput.value) ? showErrors(termInput, termSpanErrorMessage) : removeErrors(termInput, termSpanErrorMessage)
        !isValidAMOUNTValue(amountInput.value) ? showErrors(amountInput, amountErrorMessage) : removeErrors(amountInput, amountErrorMessage)
    }
}
