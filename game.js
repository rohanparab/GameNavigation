$(document).ready(function () {
    var lpx = 0;
    var hpx = 0;
    $("body").keypress(function (e) {

            console.log(e.which);

            if(e.which == 97){
                if(lpx > 0){
                    lpx = lpx - 10;
                    $(".mover").css('margin-left', '-=10px');
                }
            }

            if(e.which == 100){
                if(lpx < 350){
                    lpx = lpx + 10;
                    $(".mover").css('margin-left', '+=10px');
                }
            }

            if(e.which == 115){
                if(hpx <350){
                    hpx = hpx + 10;
                    $(".mover").css('margin-top', '+=10px');
                }
            }

            if(e.which == 119){
                if(hpx > 0){
                    hpx = hpx - 10;
                    $(".mover").css('margin-top', '-=10px');
                }
            }
    });

    $(".focus").focus();

});