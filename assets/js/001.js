// By: h01000110 (hi)
// github.com/h01000110

document.addEventListener('DOMContentLoaded', function() {
	var max = document.querySelector(".btn_max");
	var min = document.querySelector(".btn_min");

	function maximize () {
		var post = document.querySelector(".content");
		var cont = document.querySelector(".post_content");
		var wid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		if (wid > 900) {
			var widf = wid * 0.9;
			post.style.width = widf + "px";

			if (wid < 1400) {
				cont.style.width = "99%";
			} else {
				cont.style.width = "99.4%";
			}
		}
	}

	function minimize () {
		var post = document.querySelector(".content");
		var cont = document.querySelector(".post_content");
		var wid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		if ( wid > 900 ) {
			post.style.width = "800px";
			cont.style.width = "98.5%";
		}
	}

	if (max) max.addEventListener('click', maximize, false);
	if (min) min.addEventListener('click', minimize, false);
});
