const defaulters = [];
const interest = [];
let totalBorrowed = 0;

function add() {
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("due-date").value;
    let purchasePrice = document.getElementById("purchase-price").value;

    defaulters.push({"name":name, "dueDate":dueDate, "purchasePrice":purchasePrice});
    interest.push(purchasePrice);
    
    document.getElementById("notes").innerHTML = "";
    defaulters.map(createLine);
    
    totalBorrowed = interest.reduce((previousValue, currentValue) => {
        return Number(previousValue) + Number(currentValue);
    });
    
    createTotalBorrowed(totalBorrowed);
}

function createLine(item) {
    let notes = document.getElementById("notes");
    
    let divLine = document.createElement("div");
    divLine.className = "line";
    notes.appendChild(divLine);
    
    let spanName = document.createElement("span");
    spanName.innerHTML = item.name;
    divLine.appendChild(spanName);
    
    let spanDueDate = document.createElement("span");
    spanDueDate.innerHTML = item.dueDate;
    divLine.appendChild(spanDueDate);
    
    let spanPurchasePrice = document.createElement("span");
    spanPurchasePrice.innerHTML = `R$ ${item.purchasePrice}`;
    divLine.appendChild(spanPurchasePrice);
}

function calculateInterest() {
    document.getElementById("interest").innerHTML = "";
    defaulters.map(interestCalculator);
}

function interestCalculator(item) {
    let dateNow = new Date().getTime();
    let dueDate = new Date(item.dueDate).getTime();
    let dateDiference = dateNow - dueDate;
    let oneDay = 1000*60*60*24;
    let daysDiference = Math.floor(dateDiference / oneDay);

    if(daysDiference >= 1) {
        item.interest = (item.purchasePrice * (0.02 + (daysDiference * 0.001))).toFixed(2);
        item.total = (Number(item.purchasePrice) + Number(item.interest)).toFixed(2);
    } else {
        item.interest = (0).toFixed(2);
        item.total = (Number(item.purchasePrice)).toFixed(2);
    }

    createInterestList(item);
}

function createInterestList(item) {
    let interest = document.getElementById("interest");

    let divLine = document.createElement("div");
    divLine.className = "line";
    interest.appendChild(divLine);

    let spanDefaulterName = document.createElement("span");
    spanDefaulterName.innerHTML = `${item.name}`;
    divLine.appendChild(spanDefaulterName);

    let spanDefaulterInterest = document.createElement("span");
    spanDefaulterInterest.innerHTML = `Juros: R$ ${item.interest}`;
    divLine.appendChild(spanDefaulterInterest);

    let spanDefaulterTotal = document.createElement("span");
    spanDefaulterTotal.innerHTML = `Total: R$ ${item.total}`;
    divLine.appendChild(spanDefaulterTotal);
}

function groupByCustomer() {
    const orderByName = defaulters.sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    
    document.getElementById("notes").innerHTML = "";
    defaulters.map(createLine);

    document.getElementById("interest").innerHTML = "";
    defaulters.map(interestCalculator);
}

function groupByDueDate() {
    const orderByDueDate = defaulters.sort(function(a,b) {
        return a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0;
    });

    document.getElementById("notes").innerHTML = "";
    defaulters.map(createLine);

    document.getElementById("interest").innerHTML = "";
    defaulters.map(interestCalculator);
}

function createTotalBorrowed(totalBorrowed) {
    let notes = document.getElementById("notes");

    let spanTotalBorrowed = document.createElement("span");
    spanTotalBorrowed.innerHTML = `Soma total de dinheiro emprestado: R$ ${totalBorrowed}`;
    notes.appendChild(spanTotalBorrowed);
}