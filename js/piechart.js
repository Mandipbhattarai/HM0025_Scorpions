var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Expenses", "Savings"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db"
            ],
            data: [65, 25]
        }]
    }
});