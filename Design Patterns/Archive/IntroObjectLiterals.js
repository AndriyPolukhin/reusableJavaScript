// Introducing the Object Literal pattern

var myObjectLiteral = {
    myBehavior1: function () {
        /* do something */
    },
    myBehavior2: function () {
        /* do something else */
    }
};

// Example on jQuery shown

$(document).ready(function () {
    $('#myFeature li')
        .append('<div/>')
        .each(function () {
            $(this).find('div')
                .load('foo.php?item=' + $(this).attr('id'));
        })
        .click(function () {
            $(this).find('div').show();
            $(this).siblings().find('div').hide();
        });
});

// Updated Feature 1

var myFeature = {
    config: {
        wrapper: '#myFeature',
        container: 'div',
        urlBase: 'foo.php?item='
    },

    init: function (config) {
        $.extend(myFeature.config, config);
        $(myFeature.config.wrapper).find('li').
        each(function () {
            myFeature.getContent($(this));
        }).
        click(function () {
            myFeature.showContent($(this));
        });

    },

    buildUrl: function ($li) {
        return myFeature.config.urlBase + $li.attr('id');

    },

    getContent: function ($li) {
        $li.append(myFeature.config.container);
        var url = myFeature.buildUrl($li);
        $li.find(myFeature.config.container).load(url);
    },

    showContent: function ($li) {
        $li.find('div').show();
        myFeature.hideContent($li.siblings());
    },

    hideContent: function ($elements) {
        $elements.find('div').hide();
    }
};

$(document).ready(function () {
    myFeature.init();
});
