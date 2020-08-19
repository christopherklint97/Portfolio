'use strict';

let i = 0;
const txt = 'Hello there! My name is Chris and I am a Fullstack Developer. I specialize in React, Nodejs, and Python.';
const speed = 75;

typewriter();

function typewriter() {
    if (i < txt.length) {
        document.querySelector('.hero-text').textContent += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}