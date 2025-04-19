function ToDisplay(value) {
    document.getElementById('display').value += value;
}
function clear() {
    document.getElementById('display').value = '';
}
function Result() {
    try {
        document.getElementById('display').value = 
        eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}