//toggle variables

const menuToggleIcon = document.getElementById('menu-toggle-icon')
const navMobile = document.getElementById('nav')
const headerElement = document.getElementById('header')
const navLinks = document.querySelectorAll('.nav-mobile .list-link');

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


navLinks.forEach(link => link.addEventListener('click', ()=>{
  navMobile.classList.remove('active');
  headerElement.classList.remove('active');  

  let current = document.getElementsByClassName('current');
  current[0].className = current[0].className.replace(' current', "");
  link.className += " current";
}));


//animated logo in header

// function([string1, string2],target id,[color1,color2])    
consoleText(['I am Perminder..', 'Web Developer..', 'Get in touch!'], 'text',['slategray','medium turquoise']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//scroll reveal

const sr = ScrollReveal({
  distance: '55px',
  duration: '3500'
});

sr.reveal(`.image-left`, {
  origin: 'left'
});
sr.reveal(`.image-center , .showcase-data`, {
  origin: 'bottom'
});
sr.reveal(`.image-right`, {
  origin: 'right'
});


