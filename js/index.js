let count = 0;

function disabled(disableId){
   const butonDiabled =  document.getElementById(disableId).disabled = true;
}


document.getElementById('player-1').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-1-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-1');
   count++;
    }
})
document.getElementById('player-2').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-2-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-2');
   count++;
    }
})
document.getElementById('player-3').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-3-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-3');
   count++;
    }
})
document.getElementById('player-4').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-4-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-4');
   count++;
    }
})
document.getElementById('player-5').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-5-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-5');
   count++;
    }
})
document.getElementById('player-6').addEventListener('click', function(){
    if(count >4){
        alert('You have already selected 5 players!');
    }
    else{
    const countPlayer = document.getElementById('count-player');
    const player = document.getElementById('player-6-name').innerText;
   const li = document.createElement('li');
   countPlayer.appendChild(li);
   li.innerText = player ;
   disabled('player-6');
   count++;
    }
})
function inputValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue
}
function elementValue(elementId){
    const elemntField = document.getElementById(elementId);
    const elementdString = elemntField.innerText;
    const elementdValue = parseInt(elementdString)
    return elementdValue
}
document.getElementById('budget-calculate').addEventListener('click', function(){
   const budget = inputValue('budget');
   const PlayerExpensesString = document.getElementById('player-expenses')
   const playerCount = budget * count;
   PlayerExpensesString.innerText = playerCount
})
document.getElementById('total-calculate').addEventListener('click', function(){
    const manager = inputValue('manager');
    const coach = inputValue('coach');
    const PlayerExpenses = elementValue('player-expenses');
    const totalExpenses = manager + coach + PlayerExpenses;
    const total = document.getElementById('total');
    total.innerText = totalExpenses
})



