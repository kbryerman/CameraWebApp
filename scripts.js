$(document).ready(function () {

$(".toolbar_button").click(function () {
    $(this).hide();
    $(".container").css("visibility", "visible");
});

$(".icon_minimizeTool").click(function () {
    $(".container").css("visibility", "hidden");
    $(".toolbar_button").show();
});
    
$(".icon_freeze").click(function () {
        $(this).toggleClass("click");
});
    
$(".record").click(function () {
        $(this).toggleClass("click");
});

$(".icon_hide").click(function () {
    $(".container2").hide();
    $(".bottom_container2").hide();
    }); $(document).mousemove(function () {
    $(".container2").show().fadeIn(250);
    $(".bottom_container2").show().fadeIn(250);
});
    
$('.icon_expandScreen').click(function(){
    $('body').fullscreen().request();
    $('.titleHeader').hide();
    $('.fullScreen_UI').css("display", "block");
});

$('.icon_exitFullScreen').click(function(){
    $('body').fullscreen().cancel();
    $('.titleHeader').show();
    $('.fullScreen_UI').css("display", "none");
});

$('.icon_rotateLeft').click(function() {
    var angle = ($('.icon_rotateA').data('angle') + 90) || 0;
    $('.icon_rotateA').css({'transform': 'rotate(' + angle + 'deg)'});
    $('.icon_rotateA').data('angle', angle);
});
    
$('.icon_rotateRight').click(function() {
    var angle = ($('.icon_rotateA').data('angle') - 90) || 0;
    $('.icon_rotateA').css({'transform': 'rotate(' + angle + 'deg)'});
    $('.icon_rotateA').data('angle', angle);
});

});


    
    