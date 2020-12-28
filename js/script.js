//Menu
function myFunction(x) {
    x.classList.toggle('change');
};

$(function () {
    //Dropdown toggle
    $('.header__burger').on('click', function () {
        $(this).next('.header__dropdown-list').toggle();
    });

    function handler(e) {
        let target = $(e.target);
        if (target.is('.header__burger')) {
            target.children().toggle();
        }
    }
    $('.header__dropdown-list').click(handler).find('.header__dropdown-list').hide();
});