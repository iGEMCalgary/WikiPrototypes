window.onload = function() {initiate()};

function initiate() {

	container = document.getElementById("link-container");

	linkList = container.getElementsByTagName("*");

	for(i = 0; i < linkList.length; ++i) {
		link = linkList[i];
		address = link.getAttribute("href");
		if (window.location.href.indexOf(address) != -1) {
			link.classList.add("active");
			break;
		}
	}

}