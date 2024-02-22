// sip calculation 
document.getElementById('calculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    var investmentType = document.querySelector('input[name="investmentType"]:checked').value;

    var result = 0;
    if (investmentType === 'monthly') {
        result = principal * (Math.pow(1 + rate / 100 / 12, 12 * time) - 1) / (rate / 100 / 12);
    } else if (investmentType === 'one-time') {
        result = principal * Math.pow(1 + rate / 100, time);
    }

    document.getElementById('result').innerText = "Amount Gained: " + result.toFixed(2);
});



function calculate() {
    var principal_fd = parseFloat(document.getElementById('principal_fd').value);
    var timePeriod = parseInt(document.getElementById('timePeriod').value);
    var rateOfReturn = 8;
    var amount = principal_fd * (1 + (rateOfReturn / 100) * timePeriod);

    document.getElementById('result_fd').innerHTML = "Amount after " + timePeriod + " years: " + amount.toFixed(2);
}


function calculateGold(event) {
    event.preventDefault();
    var investmentAmount = document.getElementById("investment_gold").value;
    var goldRate = 6300;

    if (investmentAmount && !isNaN(parseFloat(investmentAmount))) {
        var goldAmount = (investmentAmount / goldRate).toFixed(2); // Considering gold rate in INR per gram
        document.getElementById("result_gold").innerHTML = "You will receive approximately " + goldAmount + " grams of gold.";
    } else {
        document.getElementById("result_gold").innerHTML = "Please enter a valid investment amount.";
    }
}


// document.getElementById('expenseForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const name = document.getElementById('expenseName').value;
//     const amount = document.getElementById('expenseAmount').value;
//     const date = document.getElementById('expenseDate').value;


//     console.log(`Name: ${name}, Amount: ${amount}, Date: ${date}`);

//     this.reset();
// });


// const expenseForm = document.getElementById('expenseForm');
// const expenseTable = document.getElementById('expenseTable');
// let expenses = [];

// expenseForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const name = document.getElementById('expenseName').value;
//     const amount = parseFloat(document.getElementById('expenseAmount').value);
//     const category = document.getElementById('expenseCategory').value;
//     const date = document.getElementById('expenseDate').value;

//     expenses.push({ name, amount, category, date });
//     updateExpenseTable();
//     this.reset();
// });

// function updateExpenseTable() {
//     let tableHtml = '<h2>Expense Summary</h2><table class="table"><thead><tr><th>Name</th><th>Amount</th><th>Category</th><th>Date</th></tr></thead><tbody>';
//     expenses.forEach((expense, index) => {
//         tableHtml += `<tr><td>${expense.name}</td><td>${expense.amount}</td><td>${expense.category}</td><td>${expense.date}</td></tr>`;
//     });
//     tableHtml += '</tbody></table>';
//     expenseTable.innerHTML = tableHtml;
// }
