var ctx = document.getElementById("monthlyChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Food", "Entertainment", "Health", "Others", "Savings"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#9b59b6",
        "#e74c3c",
        "#f39c12",
        "#2ecc71"
      ],
      data: [25, 35, 15, 5, 20]
    }]
  }
});

var chartData = myChart.data.datasets[0].data;
var chartLabels = myChart.data.labels;

var maxIndex = chartData.indexOf(Math.max(...chartData));

var maxLabel = chartLabels[maxIndex];
var maxCategoryNumber = chartData[maxIndex];

document.getElementById('maxCategory').innerText = maxLabel;
document.getElementById('maxCategoryNumber').innerText = maxCategoryNumber;
