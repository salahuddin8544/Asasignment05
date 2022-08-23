let count = 0;


document.getElementById('player-1').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-1-name')
        disabled('player-1');
        count++;
    }
})
document.getElementById('player-2').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-2-name')
        disabled('player-2');
        count++;
    }
})
document.getElementById('player-3').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-3-name')
        disabled('player-3');
        count++;
    }
})
document.getElementById('player-4').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-4-name')
        disabled('player-4');
        count++;
    }
})
document.getElementById('player-5').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-5-name')
        disabled('player-5');
        count++;
    }
})
document.getElementById('player-6').addEventListener('click', function () {
    if (count > 4) {
        alert('You have already selected 5 players!');
    }
    else {
        countPlayer('count-player','player-6-name')
        disabled('player-6');
        count++;
    }
})

document.getElementById('budget-calculate').addEventListener('click', function () {
    const budget = inputValue('budget');
    const PlayerExpensesString = document.getElementById('player-expenses')
    const playerCount = budget * count;
    PlayerExpensesString.innerText = playerCount
})
document.getElementById('total-calculate').addEventListener('click', function () {
    const manager = inputValue('manager');
    const coach = inputValue('coach');
    const PlayerExpenses = elementValue('player-expenses');
    const totalExpenses = manager + coach + PlayerExpenses;
    const total = document.getElementById('total');
    total.innerText = totalExpenses
})



