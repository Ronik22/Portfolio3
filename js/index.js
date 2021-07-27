$(document).ready(() => {
	$(window).on("load", function () {
		setTimeout(function () {
			$(".loader").hide(300);
			$("body").css("overflow", "auto");	
				var animation1 = anime.timeline();
				var animation2 = anime.timeline();

				animation1
				.add({
					targets: "#colp1",
					translateY: ['-100vh', 0],
					easing: "easeInOutSine",
					duration: 1000,
				})
				.add({
					targets: "#hero-text",
					scale: [0, 1],
					duration: 1000,
					delay: anime.stagger(500, {direction: 'reverse'})
				})
				.add({
					targets: "nav",
					translateY: ['-100vh', 0],
					duration: 1000,
					delay: anime.stagger(500, {direction: 'reverse'})
				})

				animation2
				.add({
					targets: "#colp2",
					translateY: ['100vh', 0],
					easing: "easeInOutSine",
					duration: 1000,
				})
				.add({
					targets: ".scroll-down",
					translateY: ['100vh', 0],
					duration: 2000,
					delay: anime.stagger(500, {direction: 'reverse'})
				})
				.add({
					targets: ".action",
					scale: [0, 1],
					duration: 1000,
					delay: anime.stagger(500, {direction: 'reverse'})
				})

				
		}, 1000);
		
	});
});


function actionToggle() {
	$(".action").toggleClass("sl-active");
}


var animation3 = anime.timeline();
animation3
.add({
	targets: ".navbar-nav .nav-item",
	autoplay: false,
	translateY: [-100, 0],
	easing: 'easeInOutSine',
	duration: 1000,
})
document.querySelector("#navbtn").onclick = animation3.play;