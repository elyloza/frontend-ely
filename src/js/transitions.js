$(document).ready(function () {
    $(function () {
        $("#card").css({opacity: 1, transition: "opacity 1s ease-in-out"});
        $("#image .cc img").css({opacity: 1, transition: "all 1s ease-in 1.5s"});
        $("#image .profile img").css({opacity: 1, transition: "all 1s ease-in 2s"});
        $("#info").css({opacity: 1, width: "auto", transition: "all 1s ease-in 2.5s"});
    });
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();
    
    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 769) {
            $('#image').css({width: "100%", height: "200px", padding: "25px", opacity: 1, transition: "height 2s ease, opacity 1s ease-in .5s"});
        }
        else
        {
            $('#image').css({width: "230px", height: "auto", padding: "25px", opacity: 1, transition: "all 1s ease-in .5s"});
        }
    }
});