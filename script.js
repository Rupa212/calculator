function appendToResult(value){
    document.getElementById('result').value += value;
}
function clearResult(){
    document.getElementById('result').value = '';

}
function calculate(){
    let result = document.getElementById('result').value;
    let calculateResult=eval(result);
    document.getElementById('result').value =calculateResult;
}
function deleteLast(){
    let result = document.getElementById('result').value;
    document.getElementById('result').value=result.slice(0,-1);

}
