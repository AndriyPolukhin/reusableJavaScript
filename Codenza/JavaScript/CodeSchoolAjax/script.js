$(document).ready(function () {
    function showPhotos() {
        $(this).find('span').slideToggle();
    }
    $('.photos').on('mouseenter', "li", showPhotos)
        .on('mouseleave', "li", showPhotos);


    var el = $("#tour");
    el.on("click", "button", function () {
        $.ajax('/photos.html', {
            data: {
                location: el.data('location')
            },
            success: function (response) {
                $('.photos').html(response).fadeIn();
            },
            error: function () {
                $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
            },
            timeout: 3000,
            beforeSend: function () {
                $('#tour').addClass('is-fetching');
            },
            complete: function () {
                $('#tour').removeClass('is-fetching');
            }
        });
    });
});



function Tour(el) {
    var tour = this;
    this.el = el;
    this.fetchPhotos = function () {
        $.ajax('/photos.html', {
            data: {
                location: tour.el.data('location')
            },
            context: tour,
            success: function (response) {
                this.el.find('.photos').html(response).fadeIn();
            },
            error: function () {
                this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
            },
            timeout: 3000,
            beforeSend: function () {
                this.el.addClass('is-fetching');
            },
            complete: function () {
                this.el.removeClass('is-fetching');
            }
        });
    }
    this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function () {
    var paris = new Tour($('#paris'));
    var london = new Tour($('#london'));
});
