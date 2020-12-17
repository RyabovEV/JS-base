"use strict";
/*Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
– латинскими буквами A, B, C, D, E, F, G, H.
2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
соответственно черными и белыми.*/

let arrWord = ['','A','B','C','D','E','F','G','H',''];
let arrFigure = ["ладья","конь", "слон","ферзь","король", "слон","конь","ладья"];

function chess_frame_sim(arrChess) {
    arrChess.push('<tr>');
    for (let i = 0; i<10;i++){
        arrChess.push('<td>'+arrWord[i]+'</td>');
    }
    arrChess.push('</tr>');
    return arrChess;    
}

function colorCell(i,x) {
    if (i%2 == 0) {
        return ' class="blackCell'+colorFigure(x)+'"';
    }    
    return ' class="whiteCell'+colorFigure(x)+'"';
}

function colorFigure(x) {
    if (x == 1 || x == 2) {
        return ' blackFigure';
    }
    if (x == 8 || x == 7) {
        return ' whiteFigure';     
    }
    return '';
}

function chess_canvas() {
    let arrChess=['<table>'];
    let i=0;
    chess_frame_sim(arrChess);
    for (let x = 8; x > 0 ; x--) {
        arrChess.push('<tr><td>'+ x +'</td>');
        for (let y = 0; y < 8; y++) {
            i++;
            if (x == 1 || x == 8) {
                arrChess.push('<td'+colorCell(i,x)+'>'+arrFigure[y]+'</td>');
            } else if (x == 2 || x == 7) {
                arrChess.push('<td'+colorCell(i,x)+'>пешка</td>');
            } else arrChess.push('<td'+colorCell(i,x)+'></td>');
            
        }
        i++;
        arrChess.push('<td>'+ x +'</td></tr>');       
    }
    chess_frame_sim(arrChess);
    arrChess.push(['</table>']);
    return arrChess;
}

document.body.insertAdjacentHTML('afterbegin', chess_canvas());