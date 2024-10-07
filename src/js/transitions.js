$(document).ready(function () {
    $(function () {
        $('#image .cc img').css({opacity: .9, transition: "opacity 1s ease 3s, width 1s ease"});
        $('#image .profile img').css({opacity: .9, transition: "opacity 1s ease 3.5s, width 1s ease"});
        $('#info .name').css({opacity: 1, transition: "opacity 1s ease 4s"});
        $('#info .location').css({opacity: 1, transition: "opacity 1s ease 4.5s"});
        $('#info .about').css({opacity: 1, transition: "opacity 1s ease 5s"});
        $('#info .buttons').css({opacity: 1, transition: "opacity 1s ease 5.5s"});
    });

    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();
    
    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 769) {
            $("#card").css({width: "400px", "min-height": "0", height: "auto", transition: "width 2s ease, height 2s ease 2s"});
            $('#image').css({width: "100%", height: "200px", padding: "25px", opacity: 1, transition: "all 1s ease 2s, border-radius 0s ease 0s, width 0s ease 0s"});
        }
        else
        {
            $("#card").css({width: "730px", "min-height": "0", height: "300px", transition: "all 2s ease"});
            $('#image').css({width: "230px", height: "auto", padding: "25px", opacity: 1, transition: "all 1s ease 2s, border-radius 0s ease 0s"});
        }
    }
});