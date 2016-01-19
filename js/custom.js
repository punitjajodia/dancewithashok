$(".question").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
        $(this).siblings(".answer").slideUp("fast");
        $(this).removeClass("open");
    } else {
       // $(".question").removeClass("open");
        $(this).addClass("open");
        $(this).siblings(".answer").slideDown("fast");
    }
});

//$(".about-salsa-header").click(function (e) {
//    e.preventDefault();

//    $("#popup").html($(this).siblings(".about-salsa-description").html());
//    $("#popup").show();

//});

