$(document).ready(function(){
    $(".peace-sign").hover(
        function(){
            $(this).addClass("tilted");
        }, function(){
            $(this).removeClass("tilted");
        }
    );
});
