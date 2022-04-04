var toggle = document.querySelector('.header-toggle');
var menu = document.querySelector('.header-nav');
var body = document.querySelector('body');

toggle.onclick = function (e) {
    e.stopPropagation();
    menu.classList.add('header-nav-active');
}
body.onclick = function (e) {
    console.log(e.target);
    if (!menu.contains(e.target) && !e.target.matches('.header-toggle')) {
        menu.classList.remove('header-nav-active');
    }
}