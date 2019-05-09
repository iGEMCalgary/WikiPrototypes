window.onload = function() {initiate()};

function initiate() {

	window.onscroll = function() {stick()};

	navBarNormal = document.getElementById("navbar");

	navBarStick = document.getElementById("navbar-stick");

	var normalOffset = navBarNormal.offsetTop + navBarNormal.offsetHeight;

	function stick() {
		if (window.pageYOffset >= normalOffset) {
			navBarStick.style.display="block";
		} else {
			navBarStick.style.display="none";
		}
	}
}