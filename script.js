//Navigation

let navRight = document.getElementById('js-menu-1');
let navLeft = document.getElementById('js-menu-2');

let navToggle = document.getElementById('js-toggle');

navToggle.addEventListener('click', function () {
    
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
});

//Swiping

let swipeRight = document.querySelector('#swipe-right');
let swipeLeft = document.querySelector('#swipe-left');

swipeRight.addEventListener('click', function() {
    $('.headline.swipe.right').hide();
    $('.headline.swipe.left').show();
    //substitute display: block with display: flex
    $('.headline.swipe.left').css('display', 'flex');
});

swipeLeft.addEventListener('click', function() {
    $('.headline.swipe.right').show();
    $('.headline.swipe.left').hide();
});

