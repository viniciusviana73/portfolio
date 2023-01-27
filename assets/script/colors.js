const mode = document.querySelector('#cmode')
const header = document.querySelector('header')
const menu = document.querySelector('menu')
const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')

mode.onclick = () => {
    document.body.classList.toggle('light')
    header.classList.toggle('light')
    menu.classList.toggle('light')
    burger.classList.toggle('light')
    bMenu.classList.toggle('light')
    for (let p = 0; p < sections.length; p++) {
        sections[p].classList.toggle('light')
    }
    footer.classList.toggle('light')
}