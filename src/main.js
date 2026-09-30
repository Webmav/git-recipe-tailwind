const buttonMenu = document.querySelector('#menu-button');
const menuWrapper = document.querySelector('#menu-wrapper');
const menuList = document.querySelector('#menu-list');
const navWrapper = document.querySelector('#nav-wrapper')
const burgerIcon = document.querySelector('#burger-icon');
const closeIcon = document.querySelector('#close-icon');

buttonMenu.addEventListener('click', ()=>{
    navWrapper.classList.toggle('on')
})