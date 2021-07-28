$(document).ready(() => {
	$(window).on("load", function () {
		setTimeout(function () {
			$(".loader").hide(300);
			$("body").css("overflow", "auto");	
				
			var tl = gsap.timeline();
			var t2 = gsap.timeline();

			tl
			.from("#colp1", {
				y: '-100vh',
				duration: 1
			})
			.from("#hero-text", {
				scale: 0,
				duration: 1.5,
				ease: "bounce.out"
			})
			.from(".animnav", {
				y: '-100vh',
				duration: 1,
				ease: "elastic.out(1, 0.3)"
			});
			
		
			t2
			.from("#colp2", {
				y: '100vh',
				duration: 1
			})
			.from(".scroll-down", {
				y: '100vh',
				duration: 2
			})
			.from(".action", {
				scale: 0,
				duration: 1,
				ease: "elastic.out(1, 0.3)"
			});
								

		}, 1000);

		
		// gsap.from(".about-me", {
		// 	scrollTrigger : {
		// 		trigger: ".about-me",
		// 		scrub: 1,
		// 		end: "top 100px", 
		// 	},
		// 	x : -1000,
		// });

		gsap.from("#about-img", {
			scrollTrigger : {
				trigger: "#about-img",
				scrub: 1,
				end: "top 100px", 
			},
			x : -1000,
		});

		gsap.from("#about-para", {
			scrollTrigger : {
				trigger: "#about-para",
				scrub: 1,
				end: "top 100px", 
			},
			x : 1000,
		});
		
	});
});


function actionToggle() {
	$(".action").toggleClass("sl-active");
}