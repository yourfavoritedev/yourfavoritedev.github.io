$("#closingBanner .navBtn").on("mouseover", function(){
	$("#closingBanner .navBtn").addClass("fadeOut")
	$(this).removeClass("fadeOut")
})

$("#closingBanner .navBtn").on("mouseout", function(){
	$("#closingBanner .navBtn").removeClass("fadeOut")
})