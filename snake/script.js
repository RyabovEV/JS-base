let FIELD_SIZE_X = 5; //размер поля
let FIELD_SIZE_Y = 5; //размер поля
let SNAKE_SPEED = 300; // интервал в мс между перемещениями змейки
let snake = []; // змейка
let direction = "x-"; // по умолчанию змейка движется вверх, уменьшая координату x
let gameIsRunning = false;
let snake_timer;
let food_timer;
let barrier_timer;
let score = 0;

function init() {
  prepareGameField();
  document.querySelector('#snake-start').addEventListener('click', startGame);
  document.querySelector('#snake-renew').addEventListener('click', refreshGame);
  addEventListener('keydown', changeDirection);
}

function prepareGameField() {
  let game_table = document.createElement('table');
  game_table.classList.add('game-table');

  // генерируем строки и ячейки игровой таблицы
  for(let i = 0; i < FIELD_SIZE_X; i++) {
    let row = document.createElement('tr');
    row.classList.add('game-table-row');
    row.dataset.row = i;

    for(let j = 0; j < FIELD_SIZE_Y; j++) {
      let cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.dataset.cell = i + '-' + j;

      row.appendChild(cell);
    }
    game_table.appendChild(row);
  }
  document.querySelector('#snake-field').appendChild(game_table);
}

function startGame() {
  gameIsRunning = true;
  respawn();

  snake_timer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, 1000);
  setTimeout(createBarrier, 1000);
}

// располагаем змейку на игровом поле
function respawn() {
  // стандартная длина змейки - 2
  let start_coord_x = Math.floor(FIELD_SIZE_X/2);
  let start_coord_y = Math.floor(FIELD_SIZE_Y/2);

  let snake_head = document.querySelector("[data-cell='" + start_coord_x + "-" + start_coord_y + "']");
  snake_head.classList.add('snake-unit');

  let snake_tail = document.querySelector("[data-cell='" + (start_coord_x - 1) + "-" + start_coord_y + "']");
  snake_tail.classList.add('snake-unit');

  snake.push(snake_head, snake_tail);
}

function move() {
  let snake_head = snake[snake.length - 1];
  let new_unit;
  let snake_coords = snake_head.dataset.cell.split('-');
  let coord_x = parseInt(snake_coords[0]);
  let coord_y = parseInt(snake_coords[1]);

  // определяем новую точку
  if(direction == "x-") {
    new_unit = document.querySelector("[data-cell='"+ (coord_x - 1) + '-' + coord_y +"']");
  } else if (direction == "x+") {
    new_unit = document.querySelector("[data-cell='"+ (coord_x + 1) + '-' + coord_y +"']");
  } else if (direction == "y+") {
    new_unit = document.querySelector("[data-cell='"+ coord_x + '-' + (coord_y + 1)  +"']");
  } else if (direction == "y-") {
    new_unit = document.querySelector("[data-cell='"+ coord_x + '-' + (coord_y - 1)  +"']");
  }

  // проверяем, что new_unit – не часть змейки и не барьер
  if(!isSnakeUnit(new_unit) && !haveBarrier(new_unit)) {
    //если змейка дошла до границы поля
    if (new_unit == null){
      let head_cell =  snake_head.getAttribute('data-cell');
      let new_head_cell = infiniteField(head_cell).split('-');
      new_unit= document.querySelector("[data-cell='"+ new_head_cell[0] + '-' + new_head_cell[1] +"']");
    }
    new_unit.classList.add('snake-unit');
    snake.push(new_unit);

    // если змейка не ела, убираем хвост
    if(!haveFood(new_unit)) {
      let removed = snake.splice(0, 1)[0];
      removed.classList.remove('snake-unit', 'food-unit');
    }
  } else {
    finishTheGame();
  }
}

function isSnakeUnit(unit) {
  let check = false;

  if(snake.includes(unit)) {
    check = true;
  }
  return check;
}

function infiniteField(head){
  let cell = head.split('-'); 
  let cell_x = cell[0];
  let cell_y = cell[1];
  let new_unit;
  //змейка достигла верхнего края
if (cell_x == 0 && cell_y !=0 && cell_y != (FIELD_SIZE_Y-1)){
  new_unit = (FIELD_SIZE_X-1) + '-' + cell_y;
}
//змейка достигла нижнего края
if (cell_x == (FIELD_SIZE_X - 1) && cell_y !=0 && cell_y != (FIELD_SIZE_Y-1)){
  new_unit = '0-' + cell_y;
}
//змейка достигла левого края
if (cell_y == 0 && cell_x !=0 && cell_x != (FIELD_SIZE_Y-1)){
  new_unit = cell_x + '-' + (FIELD_SIZE_Y-1);
}
//змейка достигла правого края
if (cell_y == (FIELD_SIZE_Y-1) && cell_x !=0 && cell_x != (FIELD_SIZE_Y-1)){
  new_unit = cell_x + '-0';
}
//углы
if (
    cell_x == 0 && cell_y == 0 ||
    cell_x == (FIELD_SIZE_X-1) && cell_y == (FIELD_SIZE_Y-1) ||
    cell_x == 0 && cell_y == (FIELD_SIZE_Y-1) ||
    cell_x == (FIELD_SIZE_X-1) && cell_y == 0
   ){
     switch (direction) {
       case "x-":
         new_unit = (FIELD_SIZE_Y-1) + '-' + (FIELD_SIZE_X-1); 
         break;
       case "x+":
         new_unit = '0-' + cell_y;
         break;
       case "y+":
         new_unit = cell_x + '-0';
         break;
       case "y-":
         new_unit = cell_x + '-' + (FIELD_SIZE_Y-1);
         break;
     }
    }
  return new_unit;
}

// проверяем встречу с преградой
function haveBarrier(unit) {
  let check = false;
  let isSnakeCrash = null;
  if (unit != null) {
    isSnakeCrash = unit.classList.contains('barrier-unit');
  } 

  // змейка врезалась
  if(isSnakeCrash) {
    check = true;
  }
  return check;
}

function finishTheGame() {
  gameIsRunning = false;
  clearInterval(snake_timer);
  alert('GAME OVER! Score: ' + score);
}

function updatingPoints(score) {
  let scorePoints = document.querySelector('#point');
  scorePoints.innerHTML = "Счёт "+score;
  SNAKE_SPEED+=10;
}

// проверяем встречу с едой
function haveFood(unit) {
  let check = false;
  let isSnakeEating = unit.classList.contains('food-unit');

  // змейка съела еду
  if(isSnakeEating) {
    check = true;

    // создаеи новую еду
    createFood();

    // увеличиваем количество очков
    score++;
    updatingPoints(score);
  }
  return check;
}

function createFood() {
  let foodCreated = false;

  let food_x = Math.floor(Math.random() * (FIELD_SIZE_X));
  let food_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

  let food_cell = document.querySelector("[data-cell='" + food_x + '-' + food_y +"']");
  let isSnake = food_cell.classList.contains('snake-unit'); // true || false
  let isBarrier = food_cell.classList.contains('barrier-unit'); // true || false
  
  //если нет змейки
  if(!isSnake && !isBarrier) {
    food_cell.classList.add('food-unit');
    foodCreated = true;
  }
}

function createBarrier() {
  let barrierCreated = false;

  let barrier_x = Math.floor(Math.random() * (FIELD_SIZE_X));
  let barrier_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

  let barrier_cell = document.querySelector("[data-cell='" + barrier_x + '-' + barrier_y +"']");
  let isSnake = barrier_cell.classList.contains('snake-unit'); // true || false
  let isFood = barrier_cell.classList.contains('food-unit'); // true || false
  
  //если нет змейки
  if(!isSnake && !isFood) {
    barrier_cell.classList.add('barrier-unit');
    barrierCreated = true;
    setTimeout(deleteBarrier,1000);
    //barrierCreated = false;
  }
}

function deleteBarrier() {
  let barrierCell = document.querySelector('.barrier-unit');
  barrierCell.classList.remove('barrier-unit');
  setTimeout(createBarrier,1000);
}

function changeDirection(e) {
  switch(e.keyCode) {
    case 37: // нажата клавиша влево
      if(direction != "y+") {
        direction = "y-";
      }
    break;
    case 38: // нажата клавиша вверх
      if(direction != "x+")
      direction = "x-";
    break;
    case 39: // нажата клавиша вправо
      if(direction != "y-")
      direction = "y+";
    break;
    case 40: // нажата клавиша вниз
      if(direction != "x-")
      direction = "x+";
    break;
  }
}

// новая игра
function refreshGame() {
  location.reload();
}

window.onload = init;