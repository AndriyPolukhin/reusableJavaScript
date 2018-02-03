 // 1. Check Off Specifica Todos by Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// 2. Click on X to delete Todo
 $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
 });

// 3. Adding a new li to the to-do list
 $("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // grabbing new todo text 
        var todotext = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");

    }
 });

 // 4. Toggle the input field
 $(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle(500);
 });