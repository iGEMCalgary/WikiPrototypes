window.onload = function() {initiate()};

function initiate() {

	// --[[ Highlighting the current page link on the navigation bar ]]--

	container = document.getElementById("item-container");

	itemList = container.getElementsByTagName("*");

	for(itemIndex = 0; itemIndex < itemList.length; ++itemIndex) {
		item = itemList[itemIndex];

		if (item.classList.contains("nav-item")) {

			link = item.getElementsByTagName("a")[0]
			address = link.getAttribute("href");

			if (item.classList.contains("dropdown")) {

				console.log("Yay");

				dropdown = item.getElementsByTagName("div")[0]
				dropdownLinkList = dropdown.getElementsByTagName("a");

				for(linkIndex = 0; linkIndex < dropdownLinkList.length; ++linkIndex) {

					console.log("yay");
					sublink = dropdownLinkList[linkIndex]
					sublinkAddress = sublink.getAttribute("href");
					if (window.location.href.indexOf(sublinkAddress) != -1) {
						console.log("yay2");
						link.classList.add("active");
						sublink.classList.add("active");
						break;
					}
				}

			} else {
				if (window.location.href.indexOf(address) != -1) {
					link.classList.add("active");
					break;
				}
			}
		}
	}
}