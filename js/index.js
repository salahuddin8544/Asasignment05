
function player(elementId){
    const playerName = document.getElementById(elementId);
    const playerNameValue = playerName.innerText;
    return playerNameValue   
}
const countPlayer = document.getElementById('count-player');
document.getElementById('player-1').addEventListener('click', function(){
    let player01 = player('player-1-name');
    let child =  countPlayer.childNodes[1];
    child.innerText = player01;  
})
document.getElementById('player-2').addEventListener('click', function(){
    let player02 = player('player-2-name');
    let child = countPlayer.childNodes[3];
    child.innerText = player02;
})
document.getElementById('player-3').addEventListener('click', function(){
    let player02 = player('player-3-name');
    let child = countPlayer.childNodes[5];
    child.innerText = player02;
})
document.getElementById('player-4').addEventListener('click', function(){
    let player02 = player('player-4-name');
    let child = countPlayer.childNodes[7];
    child.innerText = player02;
})
document.getElementById('player-5').addEventListener('click', function(){
    let player02 = player('player-5-name');
    let child = countPlayer.childNodes[9];
    child.innerText = player02;
})
