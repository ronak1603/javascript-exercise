window.onload = bingoCard

function bingoCard(){
    for(var i =1; i<= 24; i++){
        var randomNum = Math.floor(Math.random()*75)
        document.getElementById('Square'+ i).innerHTML = randomNum;
    }
}