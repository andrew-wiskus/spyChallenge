$(document).ready(function() {

    var spyCount = 1;
    $('body').append("<button id='newSpy'>NewSpy</button>");
    $('body').append("<div class ='container'></div>");
    // $('.container').css("height", "1000px");
    $('.container').css("width", "400px");
    //listeners
    $('body').on("click", "button", function() {

        switch (this.id) {
            case "newSpy":
                // console.log("new spy");
                $('.container').append("<div id='" + spyCount + "' class='spyBarSafe'><h1>" + spyCount + "</h1><button id='changeSpy'>CHANGE</button><button id='deleteSpy'>DELETE</button></div>");
                spyCount++;
                break;
            case "deleteSpy":
                // console.log("delete spy");
                $(this).parent().remove();
                break;
            case "changeSpy":
                // console.log("change spy");
                // console.log($(this).parent());
                $(this).parent().toggleClass("spyBarDanger");
                break;
            default:
                console.log("Error, button not working");
        }



    });



});
