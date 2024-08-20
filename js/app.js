
function getInsuranceValue() {
    return parseFloat(document.getElementById('insuranceValue').value);
}


function getIvaRate() {
    return parseFloat(document.getElementById('ivaRate').value) / 100;
}


function validateInputs(value, rate) {
    if (isNaN(value) || value <= 0) {
        alert('Por favor, ingrese un valor válido para el seguro (debe ser mayor que 0).');
        return false;
    }
    if (isNaN(rate) || rate < 0) {
        alert('La tasa de IVA no puede ser negativa.');
        return false;
    }
    return true;
}


function calculateTotalForRate(insuranceValue, rate) {
    return insuranceValue * (1 + rate);
}


function generateResultText(insuranceValue) {
    let resultText = '';
    for (let rate = 0.05; rate <= 0.25; rate += 0.05) {
        const totalCost = calculateTotalForRate(insuranceValue, rate);
        resultText += `Costo Total con IVA del ${rate * 100}%: $${totalCost.toFixed(2)}\n`;
    }
    return resultText;
}


function calculateTotal() {
    const insuranceValue = getInsuranceValue();
    const ivaRate = getIvaRate();

    if (!validateInputs(insuranceValue, ivaRate)) {
        return;
    }

    const resultText = generateResultText(insuranceValue);
    document.getElementById('totalCost').innerText = resultText;
}