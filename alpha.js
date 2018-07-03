var overlay = document.querySelector("#overlay");
var velocity = 0.5;
var dogImgContainers = document.querySelectorAll("#dogBlog img");
var breedDisplay = document.querySelector("#breedDisplay");
var imageWrappers = document.querySelectorAll(".imagewrap");
var wrappedImg = document.querySelectorAll(".imagewrap img");
var embBtn = document.querySelectorAll(".embBtn");
var aligners = document.querySelectorAll(".aligner")

var dogs = [
{
	type: "Corgi",
	png: "./images/dogs/corgi.png",
	gif: "./images/dogs/corgi.gif"
},
{
	type: "Husky",
	png: "./images/dogs/husky.png",
	gif: "./images/dogs/husky.gif"
},
{
	type: "Golden Retriever",
	png: "./images/dogs/golden.png",
	gif: "./images/dogs/golden.gif"
},
{
	type: "Pug",
	png: "./images/dogs/pug.png",
	gif: "./images/dogs/pug.gif"
},
{
	type: "Labrador",
	png: "./images/dogs/labrador.png",
	gif: "./images/dogs/labrador.gif"
},
{
	type: 'French Bulldog',
	png: "./images/dogs/frenchie.png",
	gif: "./images/dogs/frenchie.gif"
},
{
	type: "Shiba Inu",
	png: "./images/dogs/shiba.png",
	gif: "./images/dogs/shiba.gif"
},
{
	type: "German Shephard",
	png: "./images/dogs/german.png",
	gif: "./images/dogs/german.gif"
},
{
	type: "Samoyed",
	png: "./images/dogs/samoyed.png",
	gif: "./images/dogs/samoyed.gif"
}
]


window.addEventListener("load", function(){
	overlay.style.display = "none"
	$(".aligner").css("height", imageWrappers[0].offsetHeight)
	$(".aligner").css("width", imageWrappers[0].offsetWidth)		
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


for(var i = 0; i < aligners.length; i++){
	(function(i){
		aligners[i].addEventListener("mouseover", function(){
		wrappedImg[i].classList.add("imgFade");
		})
	}(i))
}

for(var i = 0; i < aligners.length; i++){
	(function(i){
		aligners[i].addEventListener("mouseout", function(){
		wrappedImg[i].classList.remove("imgFade");
		})
	}(i))
}


$(window).resize(function(){
	$(".aligner").css("height", imageWrappers[0].offsetHeight)
	$(".aligner").css("width", imageWrappers[0].offsetWidth)	
})


$(window).scroll(function(){
	parallax()
})

function parallax(){
	var wScroll = $(window).scrollTop()

	$("body").css("background-position", "center " + (wScroll * 0.75) + "px")
}


for(var i = 0; i < dogs.length; i++){
	dogImgContainers[i].setAttribute("src", dogs[i].png)
}

for(var i = 0; i < dogs.length; i++){
	(function(i){
		dogImgContainers[i].addEventListener("click", function(){
			this.setAttribute("src", dogs[i].gif)
			breedDisplay.textContent = dogs[i].type
		})
	}(i))
}