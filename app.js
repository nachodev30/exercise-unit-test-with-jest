let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs["USD"];
}

const fromDollarToYen = function(dollar) {
    return Math.round(((dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"]) * 100) / 100;
}

const fromYenToPound = function(yen) {
    return Math.round(((yen / oneEuroIs["JPY"])* oneEuroIs["GBP"]) * 100) / 100;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }