// -- DOM Elements
const currencyOneEl = document.querySelector('#currency-one')
const currencyTwoEl = document.querySelector('#currency-two')
const amountOneEl = document.querySelector('#amount-one')
const amountTwoEl = document.querySelector('#amount-two')
const swapEl = document.querySelector('#swap')
const rateEl = document.querySelector('#rate')


//-- Render the DOM
const renderAll = () => {
    const currencyOne = currencyOneEl.value
    const currencyTwo = currencyTwoEl.value

    // -- API: https://www.exchangerate-api.com/
    fetch(`https://v6.exchangerate-api.com/v6/66948f4679114c5deb21ca27/latest/${currencyOne}`)
    .then(response => (response.json()))
    .then(data => {

        // -- Render exchange rate
        let currentRate = data.conversion_rates[currencyTwo]
        rateEl.innerHTML = `1 ${currencyOne} = ${currentRate} ${currencyTwo}`;

        // -- Calculate currency amount
        amountTwoEl.value = (currentRate * amountOneEl.value).toFixed(2);
    })
}


//-- Event Listeners
currencyOneEl.addEventListener('change', renderAll)
currencyTwoEl.addEventListener('change', renderAll)
amountOneEl.addEventListener('input', renderAll)
amountTwoEl.addEventListener('input', renderAll)
swapEl.addEventListener('click', () => {
    let temp = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = temp;
    renderAll();
})

renderAll()