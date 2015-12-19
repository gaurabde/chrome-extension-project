chrome.browserAction.onClicked.addListner(function(tab) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tab[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});

chrome.runtime.onMessage.addListner(
	function(request, sender, sendResponse) {
		if(request.message === "open_new_tab") {
			chrome.tabs.create({"url": request.url});
		}
}
);

