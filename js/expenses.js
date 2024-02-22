let email;

const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
    if (user) {
        // console.log("User is signed in:", user.uid);
        // console.log("User email:", user.email);
        email = user.email;
    } else {
        // console.log("User is signed out");
    }
});

const db = firebase.firestore();
const collection = db.collection("expenses");

let expenses = [];

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
            console.log(expenses.length)
        }
    });

    const table = document.getElementById("table-expenses").getElementsByTagName('tbody')[0];
    for (let i = 0; i < expenses.length; i++) {
        addRow(table, expenses[i])
    }
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