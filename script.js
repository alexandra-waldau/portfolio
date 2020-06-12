let navRight = document.getElementById('js-menu-1');
let navLeft = document.getElementById('js-menu-2');

let navToggle = document.getElementById('js-toggle');

navToggle.addEventListener('click', function () {
    
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
});
