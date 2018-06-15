var overlay = document.querySelector("#overlay");

window.addEventListener("load", function(){
	overlay.style.display = "none"
})


$("#closingBanner .navBtn").on("mouseover", function(){
	$("#closingBanner .navBtn").addClass("fadeOut")
	$(this).removeClass("fadeOut")
})

$("#closingBanner .navBtn").on("mouseout", function(){
	$("#closingBanner .navBtn").removeClass("fadeOut")
})


$(".mediaTable img").on("mouseover", function(){
	$(".mediaTable img").addClass("fadeOut")
	$(this).removeClass("fadeOut")
})

$(".mediaTable img").on("mouseout", function(){
	$(".mediaTable img").removeClass("fadeOut")
})


var velocity = 0.5;

function update(){ 
var pos = $(window).scrollTop(); 
$("body").each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()-18;
    $(this).css('backgroundPosition', '50% ' + Math.round((height + pos) * velocity) +  'px'); 
   }); 
 };

 $(window).bind('scroll', update);