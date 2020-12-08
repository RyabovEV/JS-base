"use strict";
/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val – заданное число, pow – степень.*/

/*let a = -5;
let b = -4;
if (a >= 0 && b >= 0){
    console.log(a - b);
} else if (a < 0 && b < 0){
    console.log(a * b);
} else {
    console.log(a + b);
}*/

/*let x = 0;

switch (x) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
    default:
        break;
}*/

/*function summation(a,b) {
    return a+b;    
}

function subtraction(a,b) {
    return a-b;    
}

function multiplier(a,b) {
    return a*b;    
}

function division(a,b) {
    if (b == 0) {
        return Error;
    }
    return a+b;    
}

console.log(division(20,0));*/


/*let mul = 1;
function power(val, pow){    
    mul *= val; 
    if (pow == 0) {
        if (val == 0) {
            return "выражение не имеет смысла";
        }else{
            return 1;
        }
    }
    if (pow < 0) {
        ++pow;        
        if (pow < 0) {
            power(val,pow);            
        }
        return "1/"+mul;
    }
    if (pow > 1) {           
        power(val,--pow);   
    }
    return mul;
}
console.log(power(2,5));*/