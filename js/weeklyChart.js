var weekly = new Chart(document.getElementById("weeklyChart"), {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Savings',
            data: [200, 220, 190, 250, 230, 260, 280],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1
        }, {
            label: 'Expenses',
            data: [180, 190, 200, 210, 220, 230, 240],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var savingsData = [200, 220, 190, 250, 230, 260, 280];
var expensesData = [180, 190, 200, 210, 220, 230, 240];
var totalSavings = savingsData.reduce((acc, curr) => acc + curr, 0);
var totalExpenses = expensesData.reduce((acc, curr) => acc + curr, 0);
document.getElementById('totalSavings').innerText = totalSavings;
document.getElementById('totalExpenses').innerText = totalExpenses;
