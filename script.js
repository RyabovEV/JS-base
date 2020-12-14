"use strict";
/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
/*let partOfNum = { //объект
    sotni:0, 
    desiatki:0,
    edinici:0,
    category: function (n) {    
        if (n > 999) { //если число больше 999
           console.log("число превышает 999"); 
           return partOfNum; 
        } else if (!isNaN(n)) { //если значение числовое        
            let arr = n.split(''); //делим введенную строку на отдельные 
            let ln = arr.length-1;//в зависимости от длнны массива(вводимого числа) нужно заполнять значения
            for (let i = 3; i >=0;) {
                if (!isNaN(arr[i])) {
                    switch (i) {
                        case 2:
                            this.sotni= arr[ln-i];
                            break;
                        case 1:
                            this.desiatki= arr[ln-i];
                            break;  
                        case 0:
                            this.edinici= arr[ln-i];
                            break;                  
                    }              
                }
                i--;                  
            }        
            return partOfNum;
        } else { //если введены символы или пробел
            console.log("не число");
            return partOfNum;
        }     
    }
}

console.log(partOfNum.category('fhgf'));*/



//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
/*let game = {
    count: 0,
    gameIsRunning: true,
    random: function(min,max) {
        return Math.round(min + Math.random() * (max-min));
    },
    checkAnswer: function(random){
        let answer = +prompt("укажите число (-1 закончить игру)");
        
        while(this.gameIsRunning) {
            if(answer == -1){
                this.gameIsRunning = false;
            } else if (isNaN(answer)){
                alert ('Вы не ввели число!\nВыход');
                this.gameIsRunning = false;
            } else if (answer == random){
                alert ("Поздравляем, вы угадали число");
                this.gameIsRunning = false;
            } else {
                this.count++;
                answer = +prompt('Не угадали.\nУкажите другое число(-1 закончить игру)\nПопыток:' + this.count);

            }
        }
    }
}

game.checkAnswer(game.random(1,3));*/

/*3. * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
*/
let game = {
    arrQuestions:[
        [
            'Как характеризуют сумму накопленных знаний?',
            'Багаж',
            'Потребительская корзина',        
            'Кладь',
            'Контрольный пакет'
        ],
        [
            'Что каждую секунду меняется в вагоне-ресторане во время движения поезда?',
            'Вид за окном',
            'Фартуки официанток',
            'Скатерти на столах',        
            'Цены в меню'
        ],
        [
            'Каким бывает лес?',
            'корабельным',       
            'авиационным',
            'таксомоторным',        
            'железнодорожным'
        ],
        [
            'Что обычно обрывают во время гадания?',
            'лепестки у ромашки',
            'уши у сорванцов',
            'крылья у мухи',        
            'телефоны у должников'
        ],
        [
            'Какое название у бензомоторной пилы?',
            '«Дружба»',
            '«Равенство»',
            '«Любовь»',        
            '«Братство»'
        ],
        [
            'С чем поздравляют человека после бани?',
            'с лёгким паром',
            'с быстрым наваром',
            'с ядрёным жаром',        
            'с тяжёлым угаром'
        ],
        [
            'Как называется песня группы «Ногу свело!», исполненная в фильме «Турецкий гамбит»?',
            '«Идем на Восток!»',
            '«Эмигрируем на Запад!»',
            '«Едем на Юг!»',        
            '«А мы идем на Север!»'
        ],
        [
            'Кто стал супругом Чио-чио-сан?',
            'Лейтенант Пинкертон',
            'Капитан Врунгель',
            'Корнет Оболенский',        
            'Поручик Ржевский'
        ],
        [
            'Чего не увидеть на весеннем снегу?',
            'пробоин',
            'проталин',
            'промоин',        
            'прогалин'
        ],
        [
            'Какой день в СССР официально стал нерабочим в 1965 году?',
            '9 мая',
            '7 ноября',
            '23 февраля',        
            '8 марта'
        ],
        [
            'Какое из этих сражений произошло раньше остальных?',
            'Ледовое побоище',
            'Сталинградская битва',
            'Куликовская битва',        
            'Бородинское сражение'
        ],
        [
            'В какой игре используются ворота?',
            'крокет',
            'гольф',
            'софтбол',        
            'крикет'
        ]
    ],
    count: 0,
    gameIsRunning: true,
    correctAnswer: 0,
    correctAnswers:[],   
    random: function(min,max) {
        return Math.round(min + Math.random() * (max-min));
    },
    quest: function () {
        let a = 0;
        let numOfRandomQuest = this.random(0,game.arrQuestions.length-1);        
        if (numOfRandomQuest== undefined) return undefined;
        for (const key in this.correctAnswers) {
            if (this.correctAnswers[key] != this.arrQuestions[numOfRandomQuest][0]){
                a++;
            }
        }
        if (a == this.correctAnswers.length || this.correctAnswers.length == 0) {
            let question={
                quest: this.arrQuestions[numOfRandomQuest][0],
                answers : [
                    this.arrQuestions[numOfRandomQuest][1],
                    this.arrQuestions[numOfRandomQuest][2],
                    this.arrQuestions[numOfRandomQuest][3],
                    this.arrQuestions[numOfRandomQuest][4]
                ],
                rightAnswer : this.arrQuestions[numOfRandomQuest][1],
            };
            ++this.correctAnswer;
            this.correctAnswers.push(this.arrQuestions[numOfRandomQuest][0]);
            return question;
        }

    },
    checkAnswer: function(){
        while(this.gameIsRunning) {
            let quest = this.quest();
            if (quest == undefined) continue;
            console.log(quest);
            let answer = +prompt(quest.quest +" укажите укажите вариант (-1 закончить игру)\n" 
            + "1)" + quest.answers[0]
            + " 2)" + quest.answers[1]
            + " 3)" + quest.answers[2]
            + " 4)" + quest.answers[3]);
            while(this.count <= this.correctAnswers.length){
            if(answer == -1){
                this.gameIsRunning = false;
                break;
            } else if (quest.answers[answer-1] == quest.rightAnswer){
                this.count++;
                if (this.count==12) {
                    alert ("Поздравляем, вы ответили на все вопросы правильно");
                    break;
                }
                alert ("Поздравляем, это правильный ответ.\nВерных ответов: " + this.count);
                break;                
            } else {               
                alert('Не угадали.');
                this.gameIsRunning = false;
                break;
            }
        }
        }
    }
}
game.checkAnswer();