//Menu
function myFunction(x) {
    x.classList.toggle('change');
};

$(function () {
    //Dropdown toggle
    $('.header__burger').on('click', function () {
        $(this).next('.header__dropdown-nav').toggle(300);
        $('body').css('overflow', 'hidden');
    });
    $('.close-menu').on('click', function () {
        $('.header__dropdown-nav').css('display', 'none');
        $('body').css('overflow', 'unset');
    });
    $('.header__dropdown-link').on('click', function () {
        $('.header__dropdown-nav').css('display', 'none');
        $('body').css('overflow', 'unset');
    });
});


