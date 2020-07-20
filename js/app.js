'use strict';

// Task 1

const heightDocument = document.documentElement.scrollHeight;
const lowerLimit = heightDocument - 100;

// console.warn(currentHeight);

window.addEventListener('scroll', (e) => {
    const currentDate = new Date();
    const currentHeight = document.documentElement.clientHeight;
    const bottomDocument = document.documentElement.getBoundingClientRect().bottom;

    if (bottomDocument < currentHeight + 100) {
        document.body.insertAdjacentHTML('beforeend', `<p>Date: ${currentDate}</p>`);
    }
    console.log(bottomDocument, currentHeight);
});