

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action") {
      var firstHref = $("a[href^='http']").eq(0).attr("herf");

      console.log(firstHerf);
			chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHerf});
		}
}
);
