<<<<<<< HEAD
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Stocks (Equities) - Including SIPs", "Bonds and Fixed Deposits (FDs)", "Real Estate", "Cash and Cash Equivalents", "Gold Investments", "Alternative Investments", "Retirement Savings"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#e74c3c",
                "#f1c40f",
                "#9b59b6",
                "#34495e",
                "#16a085"
            ],
            data: [40, 20, 10, 5, 5, 5, 15]
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
    }
});
=======
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Stocks (Equities) - Including SIPs", "Bonds and Fixed Deposits (FDs)", "Real Estate", "Cash and Cash Equivalents", "Gold Investments", "Alternative Investments", "Retirement Savings"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#e74c3c",
                "#f1c40f",
                "#9b59b6",
                "#34495e",
                "#16a085"
            ],
            data: [40, 20, 10, 5, 5, 5, 15]
        }]
    }
});
>>>>>>> 66974c3d37e16aebcd924a1cfeaf92c0d94cf397
