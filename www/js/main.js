

$(document).ready( function() {


	$("#matr, #pwd, #serv, #agent" ).hide();
	$(".partial_content").removeClass("show").hide();


	$("#welcome").click( function() {
		$(this).fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#matr").fadeIn();
		});
	});

	$("#matr [data-confirm]").click( function() {
		$("#matr").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#pwd").fadeIn();
		});
	});

	$("#pwd [data-confirm]").click( function() {
		$("#pwd").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#serv").fadeIn();
		});
	});

	$("#serv [data-confirm]").click( function() {
		$("#serv").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#agent").fadeIn();
		});
	});

	$("#agent [data-confirm]").click( function() {
		$("#login").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#main").show().addClass("show");
		});
	});

	// const swup = new Swup();

	// bottom bar




	$(".bb_tab").click( function() {

		// tab bar effect

		$(".bb_tab.active").removeClass("active");
		$(this).addClass("active");

		var position = $(this).position();
		var leftOffset = position.left;

		$(".bottombar .bar").css({
			"left": leftOffset,
		});

		// apertura partial

		var tabId = $(this).attr("data-tab");

		$(".partial_content").removeClass("show").hide();
		$('#' + tabId).show().addClass("show");

	});

	// side menu open

	$(".menu_item").click( function() {

	});

	$(".menu_trigger").click( function() {
		$(".side_menu").toggleClass("hidden");
	});



	// line sliding_stops
	$(".sl_stop:nth-last-child(1)").addClass("actual");

	function passStop() {
		$(".actual").hide('slow', function(){
			$(this).remove();
			$(".sl_stop").last().addClass("actual");
		});

	};

	$(".line_name").click(passStop);


	// $(".sl_stop:nth-last-child(-n+3)").show();

	$(".time_indicator").click(function() {
		$(this).toggleClass("early late");
	});

});
