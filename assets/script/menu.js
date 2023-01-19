const burger = document.querySelector('span#burger')

function clickMenu() {
    if (topmenu.style.display == 'block') {
        topmenu.style.display = 'none'
        burger.innerHTML = 'menu'
    } else {
        topmenu.style.display = 'block'
        burger.innerHTML = 'close'
    }
}

function changeSize() {
    if (window.innerWidth >= 600) {
        topmenu.style.display = 'block'
        burger.innerHTML = 'menu'
    } else {
        topmenu.style.display = 'none'
    }
}