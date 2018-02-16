// CHECK OFF SPECIFIC TODOS by Clicking

// 1. THE JS WAY
/*
$("li").click(function() {
    console.log($(this).css("color"));
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});
*/

// 2. THE jQUERY WAY

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// 3. CLICK ON X TO DELETE TODO
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });  
});


// 4. CREATION OF NEW TODO's
 
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // grab a new todo text from input
        var todoText = $(this).val(); 
        $(this).val("");
        // create a new todo li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText  +"</li>"); 
    }
});

// 4. HIDE THE ICON THAT TOGGLES THE INPUT

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});