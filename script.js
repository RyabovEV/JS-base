"use strict";

/*
2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть
кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок
корзины. Корзина должна уметь считать общую сумму заказа.
3. * Добавить в галерею функцию перехода к следующему изображению. По сторонам от
большой картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые
происходит замена изображения на следующее или предыдущее.
*/
let arrowLeft =  document.querySelector('.sim-slider-arrow-left');
let arrowRight = document.querySelector('.sim-slider-arrow-right');
arrowLeft.onclick = changeBigPicture;
arrowRight.onclick = changeBigPicture;
let images = document.querySelectorAll('.slider-img');
for (let i = 0; i < images.length; i++){
    images[i].onclick = changeBigPicture;
}

function splitSrcImg(src,symbol,numb = 1) {
    let splitSrc = src.split(symbol);
    return splitSrc[splitSrc.length - numb];
}

function checkImg(imgSrc,swipe) {
    if (splitSrcImg(imgSrc,'.') != 'jpg') {
        if (swipe == -1) { return splitSrcImg(images[images.length-1].src,'/');}
        if (swipe == 1) { return splitSrcImg(images[0].src,'/');}      
    } else {       
        return splitSrcImg(images[+splitSrcImg(splitSrcImg(imgSrc,'/'),'.',2) + swipe -1].src,'/');}
}

function changeBigPicture(event) {  
    let bigImage = document.querySelector('.full-img');    
    if (event.target.className == "slider-img") {
        bigImage.src = 'img/' + splitSrcImg(event.target.src,'/');
    } else {
        if (event.target.className == "sim-slider-arrow-left") {bigImage.src='img/' + checkImg(bigImage.src,-1);}
        if (event.target.className == "sim-slider-arrow-right") {bigImage.src='img/' + checkImg(bigImage.src,1);}
    }   
}

let shop_products = [
    ['ложка',10],
    ['вилка',9],
    ['нож',20],
    ['тарелка',5],
    ['стакан',7],
    ['кружка',8],
    ['ваза',40]
]

for (let i = 0; i < shop_products.length; i++) {
    let divProduct = document.createElement('div');
    divProduct.className = 'product';
    divProduct.innerHTML = '<div>Наименование:'+shop_products[i][0]+'</div><div>Цена:'+shop_products[i][1]+'<button value="'+ shop_products[i] +'" class = "buy">Купить</button></div>';
    products.append(divProduct);    
}

let mass_products = document.querySelectorAll('.buy');
for (let a = 0; a < mass_products.length; a++){
    mass_products[a].onclick = shopCart;
}

let sumCartValue = 0;
function shopCart(event) {
    let divProdCart = document.createElement('div');
    let splitProduct = event.currentTarget.value.split(',');
    divProdCart.innerHTML = event.currentTarget.value;
    sumCart.before(divProdCart);
    sumCartValue += +(splitProduct[1]);
    sumCart.innerHTML = '<h4>Сумма</h4> '+ sumCartValue;
}