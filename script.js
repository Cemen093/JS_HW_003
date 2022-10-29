/*let resTag = document.getElementsByTagName('div');
for (const iterator of resTag) {
  iterator.style.backgroundColor = 'yellow'; 
}

let resId = document.getElementById('lastDiv');
resId.style.backgroundColor = 'red';
console.warn(resId.style.backgroundColor);

let resClass = document.getElementsByClassName('fDiv');
for (const iterator of resClass) {
  iterator.style.backgroundColor = 'blue'; 
}*/

//Написать крестики-нолики
var player;
let resClass = document.getElementsByClassName('cell');
for (const iterator of resClass) {
    iterator.onclick = clickOnCell;
}
cleanField();

function clickOnCell(event) {
    if (event.target.style.backgroundColor === "grey") {
        if (player === "green") {
            event.target.style.backgroundColor = "green"
            //проверка на победу
            if (checkWin()){
                alert(`player ${player} win!`);
                cleanField();
            } else {
                player = "blue";
                document.getElementById('player_number').innerHTML = player;
            }
        } else {
            event.target.style.backgroundColor = "blue"
            //проверка на победу
            if (checkWin()){
                alert(`player ${player} win!`);
                cleanField();
            } else {
                player = "green";
                document.getElementById('player_number').innerHTML = player;
            }
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (checkThree(
            document.getElementById("cell_"+(3*i+1)).style.backgroundColor,
            document.getElementById("cell_"+(3*i+2)).style.backgroundColor,
            document.getElementById("cell_"+(3*i+3)).style.backgroundColor
        ))
            return true;
    }

    for (let i = 0; i < 3; i++) {
        if (checkThree(
            document.getElementById("cell_"+(i+1)).style.backgroundColor,
            document.getElementById("cell_"+(i+3)).style.backgroundColor,
            document.getElementById("cell_"+(i+6)).style.backgroundColor
        ))
            return true;
    }

    if (checkThree(
        document.getElementById("cell_1").style.backgroundColor,
        document.getElementById("cell_5").style.backgroundColor,
        document.getElementById("cell_9").style.backgroundColor
    ))
        return true;
    if (checkThree(
        document.getElementById("cell_3").style.backgroundColor,
        document.getElementById("cell_5").style.backgroundColor,
        document.getElementById("cell_7").style.backgroundColor
    ))
        return true;
}

function checkThree(color_1, color_2, color_3) {
    return color_1 === color_2 && color_2 === color_3 && color_1 !== "grey";
}

function cleanField() {
    player = "green";
    document.getElementById('player_number').innerHTML = player;

    let resClass = document.getElementsByClassName('cell');
    for (const iterator of resClass) {
        iterator.style.backgroundColor = "grey";
    }
}