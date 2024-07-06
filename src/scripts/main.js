document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultarElementosHeader();
        } else {
            exibeElementoHeader();
        }
    }) 

    // programação das abas
    for (let i =0;i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(b){
            const abaAlvo = b.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            removeButton();
            b.target.classList.add('shows__tabs__button--is-active');

        }) 
    }

    // Accordion
    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', abreOuFecha);
    }
})

function ocultarElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); //adicionar class
}

function exibeElementoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden'); 
}

function abreOuFecha(elemento) {
    const classe = 'faq__question__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}