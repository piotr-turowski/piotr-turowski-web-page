//settings
var icon = document.querySelector('.icon');
var topnav = document.querySelector('.topnav');
var sticky = topnav.offsetTop;



//listeners
icon.addEventListener('click', function () {
    if (topnav.className === 'topnav') {
        topnav.className += ' responsive';
    } else {
        topnav.className = 'topnav';
    }
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        topnav.classList.add('sticky');
    } else {
        topnav.classList.remove('sticky');
    }
});
