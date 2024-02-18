function calculateGold() {
    var investmentAmount = document.getElementById("investment").value;
    var goldRate = 6300; // INR per gram

    if (investmentAmount && !isNaN(investmentAmount)) {
        var goldAmount = (investmentAmount / goldRate).toFixed(2); // Considering gold rate in INR per gram
        document.getElementById("result").innerHTML = "You will receive approximately " + goldAmount + " grams of gold.";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid investment amount.";
    }
}