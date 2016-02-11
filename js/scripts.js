$(document).ready(function() {
	setInterval(function() {
		$('#cursor').animate({
			opacity: 0
		}, 'fast', 'swing').animate({
			opacity: 1
		}, 'fast', 'swing');
	}, 600);

	$("#hidden-input").focus();

	$("#hidden-input").on("input", function() {
		$("#messages div:last-child").text($("#hidden-input").val());
	});

	$(document).click(function() {
		$("#hidden-input").focus();
	});

	$(document).keypress(function (e) {
		if (e.which == 13) {
			handleEnter();
		}
	});
});

var handleEnter = function() {
	printResponse();
	$('#chat-client').scrollTop($('#chat-client')[0].scrollHeight);
	$("#hidden-input").val("");
}

var printResponse = function() {
	var response = "Let's dispel once and for all with this fiction that Barack Obama doesn't know what he's doing. He knows <i><b>exactly</b></i> what he's doing.";

	$("<div>", {
		class: "bot", 
		html: response
	}).appendTo("#messages");

	$("<div>", {
		class: "user"
	}).appendTo("#messages");
}