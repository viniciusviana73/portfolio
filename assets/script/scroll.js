function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let p = 0; p < reveals.length; p++) {
        let elementTop = reveals[p].getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 150) {
            reveals[p].classList.add('active');
        } else {
            reveals[p].classList.remove('active');
        }
    }
}

window.onscroll = reveal;