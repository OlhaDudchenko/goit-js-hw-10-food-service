import './sass/main.scss';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const input = document.querySelector('.theme-switch__toggle');
input.addEventListener('change', inputOnChange);
showLocalStorageValue();
document.body.classList.add(Theme.LIGHT);


function inputOnChange(e) {

    const inputValue = e.target.checked;
    localStorage.setItem('position', inputValue);
    if ( inputValue === true) {

        document.body.classList.remove(Theme.LIGHT);
         document.body.classList.add(Theme.DARK);
    }

    if (inputValue === false) {
       
        document.body.classList.remove(Theme.DARK);
         document.body.classList.add(Theme.LIGHT);
    }
}


function showLocalStorageValue() {
    const savedValue = localStorage.getItem('position');

    if (savedValue ==='true') {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    
    
    console.log( input.checked=true)
    }
    if (savedValue === 'false') {
         document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        console.log( input.checked=false)
    }

}