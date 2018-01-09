$(document).ready(function(){
    $(".slider-link").click(function(){
        $(".default-slide").removeClass("default-slide");
        $(".slider-link").css("background-color","#F4CF00");
        $(this).css("background-color","red");
    });
});