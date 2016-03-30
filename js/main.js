$(document).ready(function() {
	$('#diary').click(function() {
		$('#center').bookblock({
			speed : 800,
			shadowSides : 0.8,
			shadowFlip : 0.7
		});
		alert("click");
	});
});