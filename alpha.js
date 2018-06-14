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