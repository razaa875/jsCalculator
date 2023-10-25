const { Result } = require("postcss");

function appendToResult(value) {
    document.getElementById('result').value += value;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function reset(){
    document.getElementById('result').value="";
}
function backtick(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}