//toggle variables

const menuToggleIcon = document.getElementById('menu-toggle-icon')
const navMobile = document.getElementById('nav')
const headerElement = document.getElementById('header')

//toggle function

const toggleMenu = () => {
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}


menuToggleIcon.addEventListener('click', toggleMenu);

// header border on scroll

const headerScrollEvent = () => {
    if(this.scrollY >= 30){
        headerElement.classList.add('active-scroll')
    }else{
        headerElement.classList.remove('active-scroll')
    }
}

window.addEventListener('scroll', headerScrollEvent)