//кто ходит
//0 - нолик
//1 - крестик
let phase = 1;


//результат храним в массиве
let result = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1] 
];

function generateField() {
    let fieldDiv = document.querySelector('.tictactoe');
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let cell = document.createElement('div');
            cell.classList.add('tictactoe-item');
            cell.dataset.row = i;
            cell.dataset.cell = j;
            cell.addEventListener('click', gameClickListner);
            fieldDiv.append(cell);
        }
    }
}

function gameClickListner(event) {
    let cell = event.target;
    let rowIndex = cell.dataset.row;
    let cellIndex = cell.dataset.cell;    
//Проверяем значение ячейки
    if (result[rowIndex][cellIndex] == -1) {
        //обновляем значение
        result[rowIndex][cellIndex] = phase;
        let cellContent, nextPhase;
        if (phase == 1) {
            cellContent = 'X';
            nextPhase = 'O';
            phase = 0;
        } else {
            cellContent = 'O';
            nextPhase = 'X';
            phase = 1;
        }
        //Помещаем символ 
        cell.innerText = cellContent;

        //Меняем текущего игрока
        let tictactoePhase = document.querySelector('.phase-name');
        tictactoePhase.innerHTML = nextPhase;
    } else {
        //Если ячейка не пустая
        alert('Выберите другую ячейку');
    }
    let winCondition = checkWinCondition();
    switch (winCondition) {
        case -1:
            //игра продолжается
            break;
        case 0:
            alert('победли нолики');
            location.reload();
            break;
        case 1:
            alert('победли крестики');
            location.reload();
            break;
        case 2:
            alert('ходов не осталось');
            location.reload();
            break;
    }
}

function checkDraw() {
    let draw = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (result[i][j] == -1) {
                draw++ ;
            }
        }
    }
    return draw;
}

function checkWinCondition() {
    let win = -1;
    for (let i=0; i < 2; i++){
        if (
            //по вертикали
           (result[0][0] == i && result[1][0] == i && result[2][0] == i) ||
           (result[0][1] == i && result[1][1] == i && result[2][1] == i) ||
           (result[0][2] == i && result[1][2] == i && result[2][2] == i) ||
           //по горизонтали
           (result[0][0] == i && result[0][1] == i && result[0][2] == i) ||
           (result[1][0] == i && result[1][1] == i && result[1][2] == i) ||
           (result[2][0] == i && result[2][1] == i && result[2][2] == i) ||
           //по диагонале
           (result[0][0] == i && result[1][1] == i && result[2][2] == i) ||
           (result[2][0] == i && result[1][1] == i && result[0][2] == i)
        ) {
            win = i;
        }
    }
    if (checkDraw() == 0) {
        win = 2;
    }
    return win;
}

window.onload = generateField;