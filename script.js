'use strict';

const heroText = document.querySelector('.hero-text').textContent;
const heroArray = heroText.split('.');

heroArray.pop()

setTimeout(writeText(), 3 * 1000);

function writeText() {


    for (let i = 0; i < heroArray[0].length; i++) {
        console.log(heroArray[0][i]);
    };
};

console.log(document.styleSheets);