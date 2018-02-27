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
    }); $(document).mousemove(function () {
    $(".container2").fadeIn(250);
});
    
//$('.icon_expandScreen').click(function(e){
//    // Use the plugin
//    $('html').fullScreen();
//    e.preventDefault();
//});
	
});
