// ORANGE BUTTON

$('.interface').on("click", function() {
    // console.log("on");

    // console.log(this);
    // console.log($(this).attr("class"));

    if ($(this).hasClass("orange")) {
        $('body').toggleClass("orange");
        // $('body').css("background-color", "orange");

        // $('body').css({
        //     "background-color": "orange";
        // })




    }



})

// GREEN BUTTON

$('.interface').on("click", function() {


    if ($(this).hasClass("green")) {

        $('body').toggleClass("green");

    }



})

// INCREASING SIZE OF TEXT

$('.interface').on("click", function() {


    if ($(this).hasClass("increase")) {

        $('.text').animate({
            "font-size": "+=2px"
        }, 50)

    }



})

// MOVE TEXT BUTTON


$('.interface').on("click", function() {


    if ($(this).hasClass("move")) {

        $('.text').animate({
            "left": "+=8px",
            "letter-spacing": "+=2px"

        }, 500)

    }



})