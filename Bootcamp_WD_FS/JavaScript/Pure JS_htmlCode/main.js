$("document").ready(function () {

    $("#wrapper").css("width", 500);
    $("#wrapper").css("margin", "auto");
    $("#logo2").css("float", "left");
    $("#p_two").css("color", "blue");


    $("#p_two").css({
        "background": "url('repeatBkgrnd.png') repeat-y"
    });


    $("a").css("color", "red");

    $("#tableData a").css("color", "green");

    $("em + a").css("color", "orange");

    $("p > em").css("color", "grey");

    $("#oListIndent li:nth-child(3)").css("color", "red");

    $("li[name]").html("'and the Goblet of Fire'");

    $("input[type='text']#yourName").val("Andriy and Anastasia");

    $("a[href*='google']").css("font-weight", "bolder");

    $("img[alt^='NTT']").css({
        "border-color": "black",
        "border-width": "1px",
        "border-style": "solid"
    });

    $("a[href^='http://g']").css("color", "cyan");

    $("a[href^='mailto:']").css("color", "yellow");

    $("img[alt^='NTT']").width(150).height(150);

    $("a[href$='pdf']").css("color", "red");

    $("#tableData tr:even").css("background-color", "#FFFDD0");
    $("#tableData tr:odd").css("background-color", "#F0F8FF");

    $("#tableData tr:first").css({
        "background-color": "#001A57",
        "color": "white"

    });

    $("#tableData tr:last").css({
        "background-color": "#001A57",
        "color": "white"
    });


    $("#oListTypes li:not(:contains(and))").css("color", "red");

    $("a:contains(gravida)").css("color", "blue");


    $("p:has(i)").hide();

    //    alert($("p:has(i)").html());


    $("p:has(i)").html("<i>Some normal text</i>").show();

    $("p:has(i)").append(" I go at the eend");

    $("p:has(i)").prepend(" I go at the begining ");

    $("p:has(i)").before("<p id='before_p'>A new paragraph before</p>");

    $("p:has(i)").after("<p id='after_p'>A new paragraph after</p>");

    $("#after_p").click(function () {
        $(this).remove();
    });

    $("#before_p").click(function () {
        $(this).replaceWith('<p>I\'m the new paragraph</p>');
    });


    $("#oListIndent li").each(function (index) {

        var inputListStuff = $("#listStuff").val();

        $("#listStuff").val(inputListStuff + ", " + $(this).text());

    });


    $("#oListIndent li").addClass("Harry_Potter");

    $(".Harry_Potter").css("color", "purple");

    $("#oListIndent li").click(function () {
        $(this).toggleClass("highlight");

        var bgColor = $(this).css("background-color");

        $("input[type='text']#yourName").val(bgColor);
    });

    $("#logo2").click(function () {
        var imgName = $(this).attr("src");

        $("input[type='text']#yourName").val(imgName);
    });


    $("#logo2").mouseover(function () {
        $(this).attr("src", "ntt-logo-horz.png");
    });


    $("#logo2").mouseout(function () {
        $("#logo2").attr("src", "ntt-logo.png");
    });

    $("h2").hover(function () {
            $(this).css("color", "green");
        },
        function () {
            $(this).css("color", "black");
        });

    $("#logo2").dblclick(function () {
        $(this).attr("src", "ntt-logo-plastic.png");
    });

    $(document).click(function (e) {

        $("#mClickXPos").val(e.pageX);
        $("#mClickYPos").val(e.pageY);

    });

    $(document).mousemove(function (e) {
        $("#mMoveXPos").val(e.pageX);
        $("#mMoveYPos").val(e.pageY);
    });


    $(document).keypress(function (e) {
        var keyPressed = String.fromCharCode(e.which);
        $("#keyPressed").val(keyPressed);
    });


    $("#inputFormEvent").blur(function () {
        $("#formEvent").text("Left input Element");
    });

    $("#inputFormEvent").change(function () {
        $("#formEvent").text("Typed something");
    });

    $("#inputFormEvent").focus(function () {
        $("#formEvent").text("You can type");
    });

    $("#inputFormEvent").select(function () {
        $("#formEvent").text("The text have been selected");
    });


    function showWhatTouched(e) {
        alert(e.data.message);
    }

    var bsMsg = {
        message: "Best Selling Touched"
    };

    var teMsg = {
        message: "Tracks Events Touched"
    };

    //    $("#bestSelling").on("mouseover", bsMsg, showWhatTouched);
    //    $("#trackEvents").on("mouseover", teMsg, showWhatTouched);


    var accidentImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    var focusImg = 1;

    $("#accident").click(function () {
        var image = accidentImgs[focusImg];
        focusImg++;
        if (focusImg > 3) {
            focusImg = 0;
        }

        $("#accident").attr("src", image);

    });

    $("#p_one").click(function () {
        //        $(this).hide();
    });


    $("#p_two").click(function () {
        //        $(this).fadeOut(2000);
        //        $("#p_one").fadeToggle(2000);
    });


    $("#logo2").click(function () {
        $(this).fadeTo("slow", .50);
    })

    $("td:contains('Bonds')").click(function () {
        $(this).slideUp(2000);
    });

    $("td:contains('Hal')").click(function () {
        $("td:contains('Bonds')").slideDown(2000);
    });


    $("#p_one").click(function () {
        $(this).css("position", "relative");

        $("#p_one").animate({
            left: 300,
            opacity: .5,
            'font-size': "22px",
            width: 300
        }, 2000, "easeInBounce", function () {
            alert("All Done");
        });

    });








});
