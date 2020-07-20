'use strict';

const task2 = document.querySelector('.task2');

class ScrollButton {
    constructor() {
        this.name = 'Scroll Buttom';
    }
    // Во всех методах прототипа возвращаем this, чтобы можно было-бы использовать цепочки вызовов
    // Создаёт узел - кнопку и кладёт ссылку в одноимённое свойство
    createButton(cssClass = 'scrolling-up') {
        const buttonNode = document.createElement('div');
        buttonNode.textContent = '^';
        buttonNode.classList.add(cssClass);
        this.buttonNode = buttonNode;
        this.scrollingUp(); // Даём кнопке поведение: при клике прокручивать страницу вверх
        return this;
    }
    // Вставляет кнопку - узел на страницу, по дефолту в body
    insertButtonNode(parentNode = document.body) {
        parentNode.append(this.buttonNode);
        return this;
    }
    hideButton() {
        if (this.buttonNode.classList.contains('scrolling-up_show')) {
            this.buttonNode.classList.remove('scrolling-up_show');
        }
        this.buttonNode.classList.add('scrolling-up_hide');
        return this;
    }
    showButton() {
        if (this.buttonNode.classList.contains('scrolling-up_hide')) {
            this.buttonNode.classList.remove('scrolling-up_hide');
        }
        this.buttonNode.classList.add('scrolling-up_show');
        return this;
    }
    // Вешает на кнопку событие клика, при котором страница прокрутится вверх
    scrollingUp() {
        this.buttonNode.onmousedown = () => false; // Отмена выделения текста в кнопке
        this.buttonNode.addEventListener('click', () => {
            document.documentElement.scrollIntoView({block: "start", behavior: "smooth"});
        });
        return this;
    }
}

// Создали объект кнопки и вставили её в html
const button1 = new ScrollButton();
button1.createButton().insertButtonNode(task2);

const clientHeightWindow = document.documentElement.clientHeight;
window.addEventListener('scroll', (e) => {
    const currentScroll = window.pageYOffset;

    if (currentScroll >= 300) { // 300 это высота в пикселях, прокрутив которую появится кнопка, можно регулировать этот параметр
        button1.showButton();
    } else {
        button1.hideButton();
    }
    console.log(currentScroll, clientHeightWindow);
});

