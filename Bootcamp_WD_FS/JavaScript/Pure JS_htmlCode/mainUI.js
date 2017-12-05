$(document).ready(function () {
    $("#shMenu").menu({
        position: {
            my: "center top",
            at: "center bottom"
        }
    });

    $("#accordion").accordion({
        animate: 1500,
        active: 1,
        collapsible: true,
        event: "click",
        heightStyle: "content"
    });


    $("#shTabs").tabs({
        event: "click",
        show: "fadeIn",
        hide: "fadeOut",
        active: 3,
        collapsible: true,
        heightStyle: "auto"
    });

    $("#customDialog").dialog({
        draggable: true,
        resizable: false,
        height: 300,
        width: 300,
        modal: true,
        position: {
            my: "center top",
            at: "center bottom",
            of: "#openDialog"
        },
        show: 1000,
        hide: 1000,
        autoOpen: false,
        buttons: {
            "Ok": function () {
                $("#openDialog").html("You clicked ok");
                $(this).dialog("close");
            },
            "Cancel": function () {
                $("#openDialog").html("You clicked cancel");
                $(this).dialog("close");
            }
        }
    });

    $("#openDialog").click(function () {
        $("#customDialog").dialog("open");
    });


    $("[title]").tooltip();


    $("#present").selectmenu({
        width: 200
    });

    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "MM dd, yy",
        numberOfMonths: 1,
        maxDate: 365,
        minDate: -3650
    });


    $("#radioPresents").buttonset();

    $("#randButton").button();

    $("#sampForm").draggable();

    $("#toy1").draggable();
    $("#toy2").draggable();
    $("#toy3").draggable();

    $("#cartDiv").droppable({
        activeClass: "highlight",
        hoverClass: "hoverDroppable",
        drop: function (event, ui) {
            ui.helper.hide("fade");

            var itemAlt = $(ui.draggable).attr("alt");

            alert("Item added: " + itemAlt);
        },
        accept: ".toy",
        disabled: false,
        activate: function (event, ui) {
            $("#cartMsg").remove();
            $(this).append("<span id='cartMsg'>Drop Toy Here</span>");
        },
        deactivate: function (event, ui) {
            $("cartMsg").remove();
            $(this).append("<span id='cartMsg'>You know you want it</span>");
        },
        over: function (event, ui) {
            $("#cartMsg").remove();
            $(this).append("<span id='cartMsg'>Drop It</span>");
        },
        out: function (event, ui) {
            $("#cartMsg").remove();
            $(this).append("<span id='cartMsg'>Noooooo!</span>");
        }

    });


});
