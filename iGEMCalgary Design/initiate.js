window.onload = function() {initiate()};

function initiate() {

	// --[[ Setting the height of the empty division element ]]--

	navBar = document.getElementById("navbar");

	empty = document.getElementById("empty");

	empty.style.height = navBar.offsetHeight + "px";

	console.log(navBar.offsetHeight);

	// --[[ Highlighting the current page link on the navigation bar ]]--

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