console.log("DnD API loaded.");

var method = location.hash.substr(1);

if (method == "initiative") {
	$("body").empty();
	$.getJSON("https://script.google.com/macros/s/AKfycbzvtCnW40elX9p4JAQs455keqeg0rqZySn1uvELCzNoZDYxbfk/exec", function (data) {
		console.log("Initiative rolled.");
	});
}

if (method.includes("roll")) {
	$("body").empty();
	var roll = method.split("roll");
	var substr = roll[1].split(/d|\+/g)
	var times = substr[0];
	var dice = substr[1];
	console.log(roll);
	console.log(substr);
	console.log(times);
	console.log(dice);
	$.get("https://www.random.org/integers/?num=" + times + "&min=" + 1 + "&max=" + dice + "&col=1&base=10&format=plain&rnd=new", function(data) {
		var skillRoll = (+data);
		$("body").html(skillRoll);
	});
}