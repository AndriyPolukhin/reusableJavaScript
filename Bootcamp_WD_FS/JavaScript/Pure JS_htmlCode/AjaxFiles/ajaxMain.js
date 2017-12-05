$(document).ready(function () {

    $("#oneButton").on("click", getInfoFromServer);
    $("#twoButton").on("click", getDblFromServer);
    $("#threeButton").on("click", getXmlFromServer);


});


function getInfoFromServer() {
    $.ajax({
        type: "GET",
        url: "textFromServer.txt",
        success: postToPage
    });
}

function postToPage(data, status) {
    $("#first").text(data);
}

function getDblFromServer() {
    $("span").load("getDouble.php",
        $("#theForm").serializeArray());
}

function getXmlFromServer() {
    $.ajax({
        type: "GET",
        url: "customers.xml",
        datatype: "xml",
        success: postToPageTwo
    });
}

function postToPageTwo(data) {
    $(data).find('customer').each(function () {
        var id = $(this).attr('id');
        var firstName = $(this).find("firstName").text();
        var lastName = $(this).find("lastName").text();
        var street = $(this).find("street").text();
        var city = $(this).find("city").text();
        var zip = $(this).find("zip").text();

        $('<div class="firstName"></div>').html(firstName).appendTo('#customers');
        $('<div class="lastName"></div>').html(lastName).appendTo('#customers');
        $('<div class="street"></div>').html(street).appendTo('#customers');
        $('<div class="city"></div>').html(city).appendTo('#customers');
        $('<div class="zip"></div>').html(zip).appendTo('#customers');

    });
}
