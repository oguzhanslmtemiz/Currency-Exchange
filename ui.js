class UI {
    static getCurrencies(firstSelect, secondSelect) {
        Currency.getCurrencies()
            .then(currencies => {
                currencies.sort()

                for (const index in currencies) {
                    firstSelect.options[firstSelect.options.length] = new Option(currencies[index])
                    if (currencies[index] == "USD") {
                        firstSelect.selectedIndex = index
                    }
                }

                currencies.forEach((currency, index) => {
                    secondSelect[index] = new Option(currency)
                    if (currency == "TRY") {
                        secondSelect.selectedIndex = index
                    }
                })
                date.textContent = ""
            })
            .catch(err => console.log(err))
    }

    static updateOutputs(firstCurrency, secondCurrency) {
        firstOutput.textContent = firstCurrency
        secondOutput.textContent = secondCurrency
    }

    static exchange(amount, firstCurrency, secondCurrency, rate, date, result) {
        Currency.exchange(amount, firstCurrency, secondCurrency)
            .then(obj => {
                rate.textContent = `(${obj.rate.toFixed(4)})`
                date.textContent = obj.date
                result.value = obj.total.toFixed(2)
            })
            .catch(err => console.log(err))
    }

    static loading() {
        rate.textContent = ""
        result.value = ""
        date.innerHTML = `
        <div class="spinner-border spinner-border-sm text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border spinner-border-sm text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
    }
}