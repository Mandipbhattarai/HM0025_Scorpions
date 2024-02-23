function predictExpense() {
    const date = document.getElementById('date').value;
    const categoryCode = document.getElementById('category').value; // Corrected id

    const data = {
        date: date,
        category_code: categoryCode
    };

    fetch('https://aipi-ehun.onrender.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const prediction = Math.floor(data.prediction * 100) / 100; // Round to 2 decimal places
            console.log('Prediction:', prediction);
            document.getElementById('predictionResult').innerText = 'Predicted Expense: Rs.' + prediction;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
