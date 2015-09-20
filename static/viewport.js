
(function() {

	// This file is the result of some poor design decisions that will be fixed
	// soon. Please don't judge me :(

	// The mobile layout CSS relies on a viewport of a specific pixel width
	// However, on tablets, the device-width doesn't (and shouldn't) trigger
	// the mobile stylesheet, but we still get stuck with the viewport width
	// that's appropriate only for the mobile layout (too narrow for the
	// desktop layout).

	// This script changes the viewport at load time if the mobile media query
	// fails to one more appropriate for tablets. Currently, this is specified
	// by the Jekyll template and passed down as a JS variable.

	var query = "screen and (max-device-width: 480px)";
	if (window.matchMedia && window.matchMedia(query).matches) return;
	if (!window.tabletViewport) return;

	var meta = document.querySelector("meta[name=viewport]");
	if (meta) meta.setAttribute("content", window.tabletViewport);

})();