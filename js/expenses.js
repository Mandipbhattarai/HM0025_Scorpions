let email;

const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
    if (user) {
        // console.log("User is signed in:", user.uid);
        // console.log("User email:", user.email);
        email = user.email;
        localStorage.setItem("fb-email", email);
    } else {
        // console.log("User is signed out");
    }
});

const db = firebase.firestore();
const collection = db.collection("expenses");

let expenses = [];
let labels = ["Food", "Entertainment", "Health", "Others", "Savings"];

let map = new Map();
labels.forEach(label => map.set(label.toLowerCase(), 0))

function addRow(table, data) {
    const newRow = table.insertRow(table.rows.length);
    const no = newRow.insertCell(0)
    const _name = newRow.insertCell(1);
    const amount = newRow.insertCell(2);
    const category = newRow.insertCell(3);
    const date = newRow.insertCell(4);
    no.innerHTML = table.rows.length;
    _name.innerHTML = data.name;
    amount.innerHTML = data.amount;
    category.innerHTML = data.category;
    date.innerHTML = data.date;
}

collection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === email) {
            expenses.push(data);
            if (new Date(Date.parse(data.date)).getMonth() === new Date(Date.now()).getMonth()) {
                map.set(data.category.toLowerCase(), map.get(data.category.toLowerCase()) + data.amount);
            }
        }
    });

    const table = document.getElementById("table-expenses").getElementsByTagName('tbody')[0];
    for (let i = 0; i < expenses.length; i++) {
        addRow(table, expenses[i])
    }

        const ctx = document.getElementById("monthlyChart").getContext('2d');
        const myChart = new Chart(ctx, {
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
              data: labels.map(label => map.get(label.toLowerCase())),
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
}).catch((error) => {
    console.error("Error getting documents: ", error);
});

const btn = document.getElementById("addExpense");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
    const expenseCategory = document.getElementById("expenseCategory").value;
    const expenseDate = document.getElementById("expenseDate").value;
    const doc = {
        email: email,
        name: expenseName,
        amount: expenseAmount,
        category: expenseCategory,
        date: expenseDate,
    }

    const table = document.getElementById("table-expenses").getElementsByTagName('tbody')[0];
    collection.add(doc).then(docRef => addRow(table, doc));
});
