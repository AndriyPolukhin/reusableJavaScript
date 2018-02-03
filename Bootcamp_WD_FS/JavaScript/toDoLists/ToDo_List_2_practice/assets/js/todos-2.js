// Specific li is clicked and class added
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Specific span is clicked and script is initiated
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});


$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});
