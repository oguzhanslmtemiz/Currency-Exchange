class Currency {
    static getCurrencies() {
        return new Promise((resolve, reject) => {
            fetch("http://api.exchangeratesapi.io/v1/latest?access_key=13a471317fcba47d358eca0729feeb1e")
                .then(resp => resp.json())
                .then(json => json.rates)
                .then(currencies => resolve(Object.keys(currencies)))
                .catch(err => reject(err))
        })
    }

    static exchange(amount, firstCurrency, secondCurrency) {
        return new Promise((resolve, reject) => {
            fetch("http://api.exchangeratesapi.io/v1/latest?access_key=13a471317fcba47d358eca0729feeb1e")
                .then(resp => resp.json())
                .then(json => {
                    let timestamp = new Date(json.timestamp * 1000)
                    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    let time = `${timestamp.getDate()} ${months[timestamp.getMonth()]} - ${timestamp.getHours()}:${timestamp.getMinutes()}`
                    let obj = {
                        rate: json.rates[secondCurrency] / json.rates[firstCurrency],
                        date: time,
                        total: (Number(amount) * json.rates[secondCurrency] / json.rates[firstCurrency])
                    }
                    resolve(obj)
                })
                .catch(err => reject(err))
        })
    }
}