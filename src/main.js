const buttonMenu = document.querySelector('#menu-button');
const menuWrapper = document.querySelector('#menu-wrapper');
const menuList = document.querySelector('#menu-list');
const burgerIcon = document.querySelector('#burger-icon');
const closeIcon = document.querySelector('#close-icon');

buttonMenu.addEventListener('click', ()=>{
    menuWrapper.classList.toggle('max-sm:hidden')

    menuWrapper.classList.toggle('max-sm:flex-row')
    menuWrapper.classList.toggle('max-sm:align-center')
    menuWrapper.classList.toggle('max-sm:justify-center')
    menuWrapper.classList.toggle('max-sm:absolute')
    menuWrapper.classList.toggle('max-sm:bg-black')
    menuWrapper.classList.toggle('max-sm:max-w-500px')
    menuWrapper.classList.toggle('max-sm:max-h-500px')
    menuWrapper.classList.toggle('max-sm:shadow-.125rem-.125rem-1rem-var(--color-neutral-900)')

    menuList.classList.toggle('max-sm:flex')
    menuList.classList.toggle('max-sm:flex-col')
    menuList.classList.toggle('max-sm:justify-center')
    menuList.classList.toggle('max-sm:align-center')

    menuList.classList.toggle('max-sm:p-100px')

/*     menuList.classList.toggle('max-sm:top-10%')
    menuList.classList.toggle('max-sm:right-35%')
    menuList.classList.toggle('max-sm:relative')
 */
    menuList.classList.toggle('max-sm:bg-white')



    burgerIcon.classList.toggle('max-sm:hidden')
    closeIcon.classList.toggle('max-sm:hidden')
})