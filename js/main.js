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

});
