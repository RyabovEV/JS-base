"use strict";
/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
2. С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы
результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
3. * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть
выглядеть должно вот так:
for(…){// здесь пусто}
4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей
пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

function check(a,b) {
    let i=0;    
    if (a.length == 2) {
        while(a[i]<= ++a.length){
            if (a[i]!=1 && a[i]!=b) {
                console.log("сброс");
            return false;
            }
            i++;        
        }
        return b;
    }
    return false;
}

function compare(a) {
    let i=1;
    let arr=[];
    while (i <= a) {
        if (a%i == 0) {            
            arr.push(i);
        }
    i++;
    }
    if (check(arr,a)) {
        return a;
    }
}

function primeNumber(params) {
    let x = 0;
    while (x<101) {
        if (compare(x)) {
        console.log(x);
        }
    x++;
    }
}

primeNumber();


/*let x = 0;
do {
    if (x==0) {
        console.log(x+" - это ноль");
    } else if (x%2 == 0) {
        console.log(x+" - четное число");
    } else console.log(x+" - нечетное число");
    x++;
} while (x<11);*/


//for (let i=0; i<10; console.log(i++)){}

/*let sym = 'x';
let arr = [];
for (let i = 0; i< 20; i++){
    arr.push(sym)
    console.log(arr);
}*/