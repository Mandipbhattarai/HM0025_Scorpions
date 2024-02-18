function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var timePeriod = parseInt(document.getElementById('timePeriod').value);
    var rateOfReturn = 8; // Fixed rate of return
    
    var amount = principal * (1 + (rateOfReturn / 100) * timePeriod);
    
    document.getElementById('result').innerHTML = "Amount after " + timePeriod + " years: " + amount.toFixed(2) + " at Rate of Interest of 8%";
}