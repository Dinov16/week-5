document.getElementById("button").addEventListener("click", ()=>{
    document.getElementById("title").innerText = "Informatika"
})
function valuecal(result) {
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}

function deleteLastDigit() {
    var currentValue = calculatorForm.evalresult.value;
    calculatorForm.evalresult.value = currentValue.slice(0, -1);
}

function clearScreen() {
    calculatorForm.evalresult.value = '';
}
