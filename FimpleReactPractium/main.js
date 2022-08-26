let turn = 'X';
var game = true;
xPattern = [];
oPattern = [];
const winSituation = [["c1", "c2", "c3"], ["c4", "c5", "c6"], ["c7", "c8", "c9"], ["c1", "c4", "c7"], ["c2", "c5", "c8"], ["c3", "c6", "c9"], ["c1", "c5", "c9"], ["c3", "c5", "c7"]];

function checkWinner() {
    var counter = 0;
    for (var i = 0; i < 8; i++) {
        for (var k = 0; k < (turn == 'X' ? xPattern.length : oPattern.length); k++) {
            if (winSituation[i].includes(turn == 'X' ? xPattern[k] : oPattern[k])) {
                counter++;
            }
        }
        if (counter == 3) {
            game = false;
            document.querySelector("#wonText > span").innerHTML = (turn == 'X' ? 'X' : 'O');
            document.querySelector("#wonText > span").style.color = (turn == 'X' ? "green" : "aqua");
            document.getElementById('wonText').setAttribute("style", "text-align: center; font-size: 2em; color: white; display: block;");
        } else {
            counter = 0;
        }

    }
    if (xPattern.length >= 5 && game){
        
        document.getElementById('noWinnerText').setAttribute("style", "text-align: center; font-size: 2em; color: white; display: block;");
    }


}

function changeTurn() {
    if (turn == 'X') {
        turn = 'O';
        document.querySelector("#turnH1 > span").innerHTML = turn;
        document.querySelector("#turnH1 > span").style.color = "aqua";
    } else {
        turn = 'X';
        document.querySelector("#turnH1 > span").innerHTML = turn;
        document.querySelector("#turnH1 > span").style.color = "green";
    }
}

function putXO(cell) {
    if (game) {
        let select = "#" + cell + " > .gameArea"

        if (document.querySelector(select).innerHTML == '') {
            document.querySelector(select).innerHTML = turn;
            document.querySelector(select).style.color = (turn == 'X' ? "green" : "aqua");
            if (turn == 'X') {
                xPattern.push(cell);
            } else if (turn == 'O') {
                oPattern.push(cell);
            }
            checkWinner();
            changeTurn();
        }
    }
}

function reset(){
    xoxTable = document.querySelectorAll(".gameArea");
    for (let i = 0; i < xoxTable.length; i++) {
        xoxTable[i].innerHTML = '';
    }

    document.getElementById('wonText').setAttribute("style", "text-align: center; font-size: 2em; color: white; display: none;");
    document.getElementById('noWinnerText').setAttribute("style", "text-align: center; font-size: 2em; color: white; display: none;");
    if(turn == 'O'){
        changeTurn();
    }
    while(xPattern.length > 0) {
        xPattern.pop();
    }
    while(oPattern.length > 0) {
        oPattern.pop();
    }
    game = true;
}

