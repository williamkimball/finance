let pageBuilder = () => {

let advisorDiv = document.querySelector("#advisor");
advisorDiv.textContent = "";
let docFrag = document.createDocumentFragment();
let containerDiv = document.createElement("div");

let name = document.createElement("h3");
name.textContent = `Financial Advisor: ${financeAdvisor.name}`;

let company = document.createElement("h4");
company.textContent = `Company: ${financeAdvisor.company}`;

let specialty = document.createElement("h4");
specialty.textContent = `Specialty: ${financeAdvisor.specialty}`;

docFrag.appendChild(name)
docFrag.appendChild(company)
docFrag.appendChild(specialty)

advisorDiv.appendChild(docFrag);

let stocksDiv = document.querySelector("#stocks"); 
stocksDiv.textContent = "";
let stocksFrag = document.createDocumentFragment();


let portfolio = financeAdvisor.portfolio;

portfolio.forEach(element => {
    let individualStock = document.createElement("div");
    let stockName = document.createElement("p");
    let stockQuantity = document.createElement("p");
    let stockValue = document.createElement("p");

    individualStock.className = "individual_stock"

    for (key in element) {
        stockName.textContent = `Stock name: ${element.name}`;
        stockQuantity.textContent = `Quantity Owned: ${element["shares"]}`;
        stockValue.textContent = `Stock valuation: ${element.valuation}`;

        individualStock.appendChild(stockName);
        individualStock.appendChild(stockQuantity);
        individualStock.appendChild(stockValue);

    }
    stocksFrag.appendChild(individualStock)
});

stocksDiv.appendChild(stocksFrag)

}

pageBuilder();