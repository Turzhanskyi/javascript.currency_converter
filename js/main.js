document.addEventListener("DOMContentLoaded", () => {

    const apiUrl = 'https://api.exchangeratesapi.io/latest?base=';
    const defaultBase = 'EUR';
    const fromBases = ['RUB', 'EUR', 'USD', 'ISK', 'GBP', 'JPY'];

    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const calculateButton = document.getElementById("submit");
    const result = document.getElementById('result');
    const header = document.getElementById('header');
    const startUpdate = document.getElementById('start-update');
    const display = document.getElementById('timer');
    const currencyIcon = document.getElementById('currencyIcon');
    const amountInput = document.getElementById('amount');
    const timerSelector = document.getElementById('how-to-update');
    const timerIcon = document.getElementById('start-icon');
    const timerFooter = document.getElementById('timer-footer');

    let currencyRatesData = {};
    let bases = [];


    function getCurrencyRateData(base) {
        return fetch(`${apiUrl}${base}`).then(
            res => res.json()
        );
    }

    function getDataFromApi() {
        bases = [];
        Promise.all(fromBases.map(base => getCurrencyRateData(base))).then(values => {
            values.forEach(data => {
                bases.push(data.base);
                currencyRatesData[data.base] = data.rates;
            });

            currencyRatesData.date = values[0].date;

            renderDate(currencyRatesData.date);
            makeFromSelectors();
        });
    }

    function makeFromSelectors() {
        let headBases = [];
        let tailBases = [];
        bases.forEach(base => {
            if (base === defaultBase) {
                headBases.push(base);
            }  else  {
                tailBases.push(base);
            }
        });

        const sortedBases = headBases.concat(tailBases);

        renderOptions(sortedBases, fromCurrency);

        // setCurrencyIcon(sortedBases[0]);
        // makeToSelectors(sortedBases[0]);
    }


    function renderOptions(optionsList, target) {
        let template = '';
        optionsList.forEach(option => {
            template += `<option value="${option}">${option}</option>`;
        });
        target.innerHTML = template;
    }

    function renderDate(date) {
        header.innerText = `Согласно курсу валют на ${moment(date).locale('ru').format('LL')}`;
    }

    getDataFromApi()

});