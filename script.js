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
let timeLineEd = document.querySelector('.timeline.education');
let timeLineWork = document.querySelector('.timeline.work-experience');

swipeRight.addEventListener('click', function() {
    $('.headline.swipe.right').hide();
    $('.headline.swipe.left').show();
    //substitute display: block with display: flex
    $('.headline.swipe.left').css('display', 'flex');
    $('.timeline.work-experience').hide();
    $('.timeline.education').show();
});

swipeLeft.addEventListener('click', function() {
    $('.headline.swipe.right').show();
    $('.headline.swipe.left').hide();
    $('.timeline.education').hide();
    $('.timeline.work-experience').show();
});

