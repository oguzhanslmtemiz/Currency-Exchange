const amountElement = document.querySelector("#amount")
const firstSelect = document.querySelector("#firstCurrency")
const secondSelect = document.querySelector("#secondCurrency")
const firstOutput = document.querySelector("#firstOutput")
const secondOutput = document.querySelector("#secondOutput")
const rate = document.querySelector("#rate")
const date = document.querySelector("#date")
const result = document.querySelector("#result")

function eventListeners() {
    amountElement.addEventListener("input", exchange)
    firstSelect.addEventListener("change", exchange)
    secondSelect.addEventListener("change", exchange)
}
eventListeners()
UI.loading()
UI.getCurrencies(firstSelect, secondSelect)

function exchange() {
    UI.loading()
    UI.updateOutputs(firstSelect.value, secondSelect.value)
    UI.exchange(amountElement.value, firstSelect.value, secondSelect.value, rate, date, result)
}