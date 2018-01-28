App.register('module.application.form', {

    init: function (form, callback) {

        if (form) {
            form.on('submit', function () {
                return App.module.application.form.validate(form, callback);
            });
        } else {
            $('form.validate').on('submit', function () {
                return App.module.application.form.validate(this, callback);
            });
        }
    },

    validate: function (that, callback) {
        var form = $(that);
        var url = form.attr('validate') ? form.attr('validate') : form.attr('action');
        var data = form.serializeArray();

        form.find(':submit').attr('disabled', 'disabled').addClass('active');

        App.showLoader();



        $.ajax({
            url: url,
            type: 'POST',
            data: {
                async_validation: 1,
                values: $.param(data)
            },
            dataType: 'json',
            success: function (data) {

                form.find('.form-group').removeClass('error').find('.form-elem-errors').empty();

                if (data.messages) {

                    $.each(data.messages, function (name, mess) {
                        form.find('[name="' + name + '"]').closest('.form-group').addClass('error').find('.form-elem-errors').append(mess);
                    });

                    var errors = $('.form-elem-errors:first', form);

                    if (errors[0]) {

                        var offset = errors.offset().top - $(window).scrollTop();

                        if (offset < 20) {

                            $('html, body').animate({
                                scrollTop: errors.offset().top - 120
                            }, 500);
                        }
                    }

                    $(':submit', form).removeClass('active').removeAttr('disabled');


                } else {
                    App.settings.disableAutoHideLoader = true;
                    if (callback) {
                        callback(form);
                    } else {
                        form[0].submit();
                    }
                }
            },
            error: function () {
                $(':submit', form).removeClass('active').removeAttr('disabled');

            }
        });

        return false;
    },


});
