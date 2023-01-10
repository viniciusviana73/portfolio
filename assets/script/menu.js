function clickMenu() {
    topmenu.style.display == 'block' ?
    topmenu.style.display = 'none' : 
    topmenu.style.display = 'block'
}

function changeSize() {
    if (window.innerWidth >= 600) {
        topmenu.style.display = 'block'
    } else {
        topmenu.style.display = 'none'
    }
}