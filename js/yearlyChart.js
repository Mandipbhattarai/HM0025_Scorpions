var yearly = new Chart(document.getElementById("yearlyChart"), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Savings',
            data: [2000, 2200, 1900, 2500, 2300, 2600, 2800, 2700, 2300, 2600, 2500, 2800],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: 'rgb(255, 255, 255)',
            pointHoverBackgroundColor: 'rgb(54, 162, 235)',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
        }, {
            label: 'Expenses',
            data: [1800, 1900, 2000, 2100, 2200, 2300, 2400, 2300, 2200, 2400, 2600, 2500],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: 'rgb(255, 255, 255)',
            pointHoverBackgroundColor: 'rgb(255, 99, 132)',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 4000
            }
        }
    }
});

var savingsDataYear = [2000, 2200, 1900, 2500, 2300, 2600, 2800, 2700, 2300, 2600, 2500, 2800];
var expensesDataYear = [1800, 1900, 2000, 2100, 2200, 2300, 2400, 2300, 2200, 2400, 2600, 2500];
var totalSavingsYear = savingsDataYear.reduce((acc, curr) => acc + curr, 0);
var totalExpensesYear = expensesDataYear.reduce((acc, curr) => acc + curr, 0);
document.getElementById('totalSavingsYear').innerText = totalSavingsYear;
document.getElementById('totalExpensesYear').innerText = totalExpensesYear;
