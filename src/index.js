import foodCardTpl from './templates/food-card.hbs';
import cards from './menu.json';
import {changeThemeDark, changeThemeLight,Theme} from './js/themes.js';
import './sass/main.scss';


const input = document.querySelector('.theme-switch__toggle');
const menu = document.querySelector('.js-menu');
document.body.classList.add(Theme.LIGHT);
input.addEventListener('change', inputOnChange);

showLocalStorageValue();

function inputOnChange(e) {

    const inputValue = e.target.checked;
    localStorage.setItem('position', inputValue);
    if ( inputValue === true) {
       changeThemeDark();
       }

    if (inputValue === false) {
       changeThemeLight();
        }
};



function showLocalStorageValue() {
    const savedValue = localStorage.getItem('position');

    if (savedValue ==='true') {
        changeThemeDark();
        input.checked=true;
    }
    if (savedValue === 'false') {
        changeThemeLight();
        input.checked=false;
    }

     
};

const foodCardsMurkup=createFoodCards(cards)
menu.insertAdjacentHTML('beforeend',foodCardsMurkup);

function createFoodCards(cards) {
    return cards.map(foodCardTpl).join('');
}