
const financeAdvisor = Object.create(null, {
    company: {
        value: "Heirloom Investments",
        enumerable: true,
        writable: true,
    },
    specialty: {
        value: "Making lots of money",
        enumerable: true,
        writable: true,
    },
    name: {
        value: "Sarah Dodd",
        enumerable: true,
    },
    portfolio: {
        value: [
            {
                "name": "APPL",
                "shares": 152,
                valuation: 30400
            },
            {
                "name": "TSLA",
                "shares": 198,
                valuation: 96432
            },
            {
                "name": "GE",
                "shares": 432,
                valuation: 10423
            },
        ],
        writable: true
    },
    worth: {
        value:
            function () {
                let totalValue = 0;
                let portfolioArray = financeAdvisor.portfolio;
                portfolioArray.forEach(element => {
                    totalValue += element.valuation
                });
                return totalValue
            }
    },
    purchase: {
        value: function (ticker, quantity, price) {
            let portfolioArray = financeAdvisor.portfolio;
            portfolioArray.push({
                "name": `${ticker}`,
                shares: quantity,
                valuation: price
            })
        }
    },
    sell: {
        value: function (ticker, quantity, price) {
            let portfolioArray = financeAdvisor.portfolio;
            portfolioArray.forEach(function (element) {
                if (ticker === element.name) {
                    element.shares -= quantity;
                    element.valuation -= price;
                    console.log(`Your new values for ${ticker} stock are Quantity: ${element.shares} Valuation: ${element.valuation}`);
                }
            });
        }
    }
});