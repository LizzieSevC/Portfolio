const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    //console.log(window.scrollY) 
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('activeWhite')
    } else {
        nav.classList.remove('activeWhite')
    }
    if(window.scrollY > nav.offsetHeight + 1000) {
        nav.classList.add('activeBlack')
    } else {
        nav.classList.remove('activeBlack')
    }
    if(window.scrollY > nav.offsetHeight + 2300) {
        nav.classList.add('activePurple')
    } else {
        nav.classList.remove('activePurple')
    }
}

