"use strict";
let numbers_divs = 0;

function add_div(){
    var body = document.querySelector('body');  // входимо в тег "body", створюючи змінну
    var d = document.createElement('div');  // створюємо елемент "div"
    d.setAttribute('class', 'new_div'); // вказуємо клас, до якого належить "div"
    d.innerHTML = 'Додався div';    // текст всередині "div"
    body.appendChild(d);    // додаємо дочірній об'єкт всередині "body"
    numbers_divs++;

    if(numbers_divs > 10){
        for(let i = 1; i <= numbers_divs; i++){
            body.lastChild.remove();
        }
        numbers_divs = 0;
    }
}

