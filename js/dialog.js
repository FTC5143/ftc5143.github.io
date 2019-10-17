$(document).ready(function() {
	$("dialog").each(function(){
		dialogPolyfill.registerDialog(this);
	});
});