function disabled(disableId) {
    const butonDiabled = document.getElementById(disableId).disabled = true;
}
function countPlayer( elementId1,elementId2){
    const playerList = document.getElementById(elementId1);
    const player = document.getElementById(elementId2).innerText;
    const li = document.createElement('li');
    playerList.appendChild(li);
    li.innerText = player;
}
function inputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue
}
function elementValue(elementId) {
    const elemntField = document.getElementById(elementId);
    const elementdString = elemntField.innerText;
    const elementdValue = parseInt(elementdString)
    return elementdValue
}