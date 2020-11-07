// -- DOM Elements
const currencyOneEl = document.querySelector('#currency-one')
const currencyTwoEl = document.querySelector('#currency-two')
const amountOneEl = document.querySelector('#amount-one')
const amountTwoEl = document.querySelector('#amount-two')
const swapEl = document.querySelector('#swap')
const rateEl = document.querySelector('#rate')

//-- Event Listeners

currencyOneEl.addEventListener('change', () => {
    console.log(currencyOneEl.value)
})

currencyTwoEl.addEventListener('change', () => {
    console.log(currencyTwoEl.value)
})

amountOneEl.addEventListener('input', () => {

})

amountTwoEl.addEventListener('input', () => {
    
})

swapEl.addEventListener('click', () => {

})

//-- Render the DOM
const renderAll = () => {
    const currencyOne = currencyOneEl.value

    // -- API: https://www.exchangerate-api.com/
    fetch(`https://v6.exchangerate-api.com/v6/66948f4679114c5deb21ca27/latest/${currencyOne}`)
    .then(response => (response.json()))
    .then(data => console.log(data))
}

renderAll()