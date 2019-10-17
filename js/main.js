$(document).ready(function() {
	$(".animated-progress").each(function() {
		$(this).attr("value",$(this).attr("destination"));
	})
});


$(document).ready(function() {
	$("dialog").each(function(){
		dialogPolyfill.registerDialog(this);
	});
});