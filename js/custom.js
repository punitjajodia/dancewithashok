$(".question").click(function () {
    if ($(this).hasClass("open")) {
        $(this).siblings(".answer").slideUp("fast");
        $(this).removeClass("open");
    } else {
       // $(".question").removeClass("open");
        $(this).addClass("open");
        $(this).siblings(".answer").slideDown("fast");
    }
});