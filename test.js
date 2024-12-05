test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion to USD to JPY (1 dollar = 149.03 JPY)", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(10)).toBe(1462.62);
})

test("Conversion to JPY to GBP (1 JPY  = 0.0072 GBP)", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1000)).toBe(5.56);
})