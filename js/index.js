
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
