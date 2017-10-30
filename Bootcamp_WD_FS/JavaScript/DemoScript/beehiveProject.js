var progect = {
    widgets: {
        sticky: function () {
            $(".lang-item.active").on("click", function () {
                $(".lang-wrap").toggleClass("animate");
                $(this).prependTo($(".lang-wrap"));
                $(this).siblings().toggleClass("show");
            });

            $(".mobile-menu-box a").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("active");
                $("body").toggleClass("aside");
            });
        },

        sticky: function () {
            $(".language-chooser li.active a").on("click", function () {
                $(".language-chooser").toggleClass("animate");
                $(this).prependTo($(".language-chooser"));
                $(this).siblings().toggleClass("show");
            });

            $(".mobile-menu-box a").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("active");
                $("body").toggleClass("aside");
            });
        },

        nav: function () {
            $(".scroll-box").liLanding({
                topMargin: 69
            });

            $(".main-nav-item").on("click", function () {
                $("body").removeClass("aside");
                $(".mobile-menu-box a").removeClass("active");
            });
        },

        gallery: function () {
            var gallery_item = $(".gallery-item");

            $(".gallery-more-box").on("click", function (e) {
                e.preventDefault();

                gallery_item.addClass("passive");
                $(this).closest(gallery_item).removeClass("passive").addClass("active");

                $(".gallery-image").removeClass("gallery-image");
                slider = $(this).closest(gallery_item).find('.bxslider').bxSlider();
            });

            $(".back").on("click", function (e) {
                e.preventDefault();
                gallery_item.removeClass("passive").removeClass("active");
                $(".bxslider img").addClass("gallery-image");

                slider.destroySlider();
            });

            $(".more").on("click", function (e) {
                e.preventDefault();

                slider.destroySlider();

                $(".gallery-item.active").removeClass("active").addClass("passive").fadeOut().siblings().addClass("active").fadeIn();

                slider = $(this).closest(gallery_item).siblings().find('.bxslider').bxSlider();
            });
        },

        items: function (self) {
            /*
            				var section_1 = $(".animation-section-1"),
            						section_2 = $(".animation-section-2"),
            						animation_item = $('.animation-item');

            				$(window).scroll(function(){
            			    var w = $(window).scrollTop(),
            				    	s1 = section_1.offset().top,
            				    	s2 = section_2.offset().top;

            			    if (w > s1) {
            						animate(section_1);
            			    }

            			    if (w > s2) {
            						animate(section_2);
            			    }

            			    function animate(self) {
            				    $(self).find(animation_item).each(function(i){
            							var item = $(this);
            							setTimeout(function() {
            								item.addClass('active');
            							}, 700*i);
            						});
            			    }
            				});
            */

            wow = new WOW({
                mobile: false
            })

            wow.init();

            var timer;

            $(window).scroll(function () {
                var w = $(window).scrollTop(),
                    start = $(".start").offset().top;

                if (w > start) {
                    $("#sticker").sticky({
                        topSpacing: 0,
                        zIndex: 10
                    });
                    $(".up").fadeIn();
                } else {
                    $("#sticker").unstick();
                    $(".up").fadeOut();
                }

                var header = $(".is-sticky .main-header");

                /*
                				    if ( timer ) clearTimeout(timer);

                				    timer = setTimeout(function(){
                				        header.stop().slideDown();
                				    }, 1000);

                				    timer = setTimeout(function(){
                				        header.stop().slideUp();
                				    }, 2000);
                */
            });

            $(".up").on("click", function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            });

            /*
            				$(window).bind('mousemove', function(a){
            			    if(typeof movewait != 'undefined'){
            			        clearTimeout(movewait);
            			    }

            			    movewait = setTimeout(function(){
            			      var header = $(".is-sticky .main-header"),
            						st = $(this).scrollTop();
            						console.log(a.pageY);
            						if (a.pageY-st < 60) {
            							header.slideDown();
            						} else {
            							header.slideUp();
            						}
            				  },200);
            				});
            */

            $(".buy").on("click", function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(this).closest(".landingItem").position().top
                }, 'slow');

                $("body").addClass("overflow");
                $("section").addClass("active");

                $(this).closest("section").find(".buy-box").fadeIn();
            });

            $(".sale").on("click", function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(this).closest(".landingItem").position().top
                }, 'slow');

                $("body").addClass("overflow");
                $("section").addClass("active");
                $(".sale-box").fadeIn();
            });

            $(".call").on("click", function (e) {
                e.preventDefault();
                $("body").addClass("overflow");
                $("section").addClass("active");
                $(".call-box").fadeIn();
            });

            $(".popup-close").on("click", function () {
                $("body").removeClass("overflow");
                $("section").removeClass("active");
                $(".popup-box").fadeOut();
            });

        },

        map: function (self) {

            var map;

            function initialize() {
                var markerLatlng1 = new google.maps.LatLng(49.232082, 32.237359);
                var markerLatlng2 = new google.maps.LatLng(48.790564, 31.658853);
                var markerLatlng3 = new google.maps.LatLng(50.017464, 32.991066);
                var markerLatlng4 = new google.maps.LatLng(49.262082, 32.267359);
                var markerLatlng5 = new google.maps.LatLng(48.890215, 36.298944);
                var markerLatlng6 = new google.maps.LatLng(49.5895232, 34.5501397);
                //var markerLatlng7 = new google.maps.LatLng(47.6916741,33.2642615);
                var myLatlng = new google.maps.LatLng(49.444440, 32.063809)

                var mapOptions = {
                    zoom: 7,
                    center: myLatlng,
                    scrollwheel: true,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: true,
                    disableDoubleClickZoom: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

                var marker1 = new google.maps.Marker({
                    position: markerLatlng1,
                    icon: "/images/marker.png",
                    map: map
                });

                var marker2 = new google.maps.Marker({
                    position: markerLatlng2,
                    icon: "/images/marker.png",
                    map: map
                });

                var marker3 = new google.maps.Marker({
                    position: markerLatlng3,
                    icon: "/images/marker.png",
                    map: map
                });

                var marker4 = new google.maps.Marker({
                    position: markerLatlng4,
                    icon: "/images/marker.png",
                    map: map
                });
                var marker5 = new google.maps.Marker({
                    position: markerLatlng5,
                    icon: "/images/marker.png",
                    map: map
                });
                var marker6 = new google.maps.Marker({
                    position: markerLatlng6,
                    icon: "/images/marker.png",
                    map: map
                });
                var marker7 = new google.maps.Marker({
                    position: markerLatlng7,
                    icon: "/images/marker.png",
                    map: map
                });

            }

            google.maps.event.addDomListener(window, 'load', initialize);

            $(window).resize(function () {
                $(".contacts-button").on("click", function (evt) {
                    if (parseInt($(window).width()) > 680) {
                        evt.preventDefault();

                        var lat = $(this).data("lat");
                        var lon = $(this).data("lon");
                        latlng = new google.maps.LatLng(lat, lon);
                        map.setZoom(13);
                        //map.setCenter(latlng);
                        var lat0 = map.getBounds().getNorthEast().lat();
                        var lng0 = map.getBounds().getNorthEast().lng();
                        var lat1 = map.getBounds().getSouthWest().lat();
                        var lng1 = map.getBounds().getSouthWest().lng();

                        var $pos_btn = $(this).position();
                        var $par = $("#contacts").position();
                        var $pers = ($pos_btn.top - $par.top) / $("#contacts").height() * 100;
                        var $map_pers = (lat0 - lat1) / 100;
                        latlng2 = new google.maps.LatLng(lat + ($pers - 50) * $map_pers, lon);
                        map.setCenter(latlng2);
                    }
                });

                $(".news-more").on("click", function (e) {
                    /*e.preventDefault();
                    $(this).fadeOut();
                    $(".news-mobile-item").fadeIn();*/
                });

                $("#map-canvas").height($(".contacts-half").height() + 20);
                $(".buy-box, .sale-box").height($(window).height() - 40);
                $(".first-section").height($(window).height());
            }).resize();
        },

        form: function () {

            $(".input").mouseenter(function () {
                $(this).addClass("active");
            }).mouseout(function () {
                if ($(this).val() == '') {
                    $(this).removeClass("active");
                }
            });

            $("#form-button").on("click", function () { //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЃРѕР±С‹С‚РёРµ РѕС‚РїСЂР°РІРєРё РґР»СЏ С„РѕСЂРјС‹ СЃ id=form
                var form_data = $("#form").serialize(); //СЃРѕР±РµСЂР°РµРј РІСЃРµ РґР°РЅРЅС‹Рµ РёР· С„РѕСЂРјС‹

                $.ajax({
                    type: "POST", //РњРµС‚РѕРґ РѕС‚РїСЂР°РІРєРё
                    url: "call.php", //РїСѓС‚СЊ РґРѕ php С„Р°РёР»Р° РѕС‚РїСЂР°РІРёС‚РµР»СЏ
                    data: form_data,
                    success: function () {
                        console.log(form_data);
                        //РєРѕРґ РІ СЌС‚РѕРј Р±Р»РѕРєРµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїСЂРё СѓСЃРїРµС€РЅРѕР№ РѕС‚РїСЂР°РІРєРµ СЃРѕРѕР±С‰РµРЅРёСЏ
                        $(".call-box").fadeOut();
                        $(".thanks-box").fadeIn();
                    }
                });
            });


            $(".buy-button").on("click", function () { //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЃРѕР±С‹С‚РёРµ РѕС‚РїСЂР°РІРєРё РґР»СЏ С„РѕСЂРјС‹ СЃ id=form
                var form_data_buy = $(this).closest(".buy-form").serialize(); //СЃРѕР±РµСЂР°РµРј РІСЃРµ РґР°РЅРЅС‹Рµ РёР· С„РѕСЂРјС‹

                $.ajax({
                    type: "POST", //РњРµС‚РѕРґ РѕС‚РїСЂР°РІРєРё
                    url: "buy.php", //РїСѓС‚СЊ РґРѕ php С„Р°РёР»Р° РѕС‚РїСЂР°РІРёС‚РµР»СЏ
                    data: form_data_buy,
                    success: function () {
                        console.log(form_data_buy);
                        //РєРѕРґ РІ СЌС‚РѕРј Р±Р»РѕРєРµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїСЂРё СѓСЃРїРµС€РЅРѕР№ РѕС‚РїСЂР°РІРєРµ СЃРѕРѕР±С‰РµРЅРёСЏ
                        $(".buy-box").fadeOut();
                        $(".thanks-box").fadeIn();
                    }
                });
            });

            $(".sale-button").on("click", function () { //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЃРѕР±С‹С‚РёРµ РѕС‚РїСЂР°РІРєРё РґР»СЏ С„РѕСЂРјС‹ СЃ id=form
                var form_data_sale = $(this).closest(".sale-form").serialize(); //СЃРѕР±РµСЂР°РµРј РІСЃРµ РґР°РЅРЅС‹Рµ РёР· С„РѕСЂРјС‹

                $.ajax({
                    type: "POST", //РњРµС‚РѕРґ РѕС‚РїСЂР°РІРєРё
                    url: "sale.php", //РїСѓС‚СЊ РґРѕ php С„Р°РёР»Р° РѕС‚РїСЂР°РІРёС‚РµР»СЏ
                    data: form_data_sale,
                    success: function () {
                        console.log(form_data_sale);
                        //РєРѕРґ РІ СЌС‚РѕРј Р±Р»РѕРєРµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїСЂРё СѓСЃРїРµС€РЅРѕР№ РѕС‚РїСЂР°РІРєРµ СЃРѕРѕР±С‰РµРЅРёСЏ
                        $(".sale-box").fadeOut();
                        $(".thanks-box").fadeIn();
                    }
                });
            });


            $(".thanks-button").on("click", function () {
                $("body").removeClass("overflow");
                $("section").removeClass("active");
                $(".thanks-box").fadeOut();
            });

        }
    },

    init: function () {
        $(function () {
            $("[data-js]").each(function () {
                var self = $(this);
                progect.widgets[self.data("js")](self, self.data());
            });
        });
    },
}

progect.init();
$('<i class="brdtop"></i><i class="brdright"></i><i class="brdbottom"></i><i class="brdleft"></i>').appendTo('.borders, .borders_hover');

$(document).ready(function () {
    same_h();
});

$(window).resize(same_h);

function same_h() {
    var samehitem;
    if ($("section .same_h_cont").length) {
        var items = new Array();
        var i_start = 0;
        var div_height = 0,
            offtop = 0;
        $("section .same_h_cont").each(function (i, samehitem) {
            items[i] = $(samehitem);
            if (i == 0) {
                offtop = items[i].offset().top;
            }
            if (items[i].offset().top > offtop) {
                for (n = i_start; n < i; n++) {
                    items[n].find(".same_h").height(div_height);
                    offtop = items[i].offset().top;
                }
                i_start = i;
                div_height = 0;
            }
            items[i].find(".same_h").css("height", "");
            if (items[i].find(".same_h").height() > div_height) {
                div_height = items[i].find(".same_h").height();
            }

        });
        for (n = i_start; n < $("section .same_h_cont").length; n++) {
            items[n].find(".same_h").height(div_height);
        }

    }

}
