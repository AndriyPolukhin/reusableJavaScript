/*$("button").on("click", function () {
    $("div").fadeOut(1000, function () {
        $(this).remove();
        console.log("did it");
    });

});*/

/*$("button").on("click", function () {
    $("div").fadeIn(1000, function () {
        console.log("Hello did it");
    });

});*/


/*$("button").on("click", function() {
    $("div").fadeToggle(500);
});*/

$("button").on("click", function () {
    $("div").slideToggle(1000, function () {
        $(this).remove();
        console.log("SLIDE IS DONE");
    });
});
