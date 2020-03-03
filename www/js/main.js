

$(document).ready( function() {


	$("#matr, #pwd, #serv, #agent" ).hide();
	$(".partial_content").removeClass("show").hide();


	$("#welcome").click( function() {
		$(this).fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#matr").fadeIn();
		});
	});

	$(".error_msg").hide();



 	$("input").focusin(function() {
		$(this).parents(".overlay_content").addClass("focus");
	});

	$("input").focusout(function() {
		$(this).parents(".overlay_content").removeClass("focus");
	});


	// login

	$("#matr [data-confirm]").click( function() {

		if ( $("#matr input").val() == "12345" ) {

			$(".error_msg").hide();

			$("#matr").fadeOut(300, function() {
				//Stuff to do *after* the animation takes place
				$("#pwd").fadeIn();
			});

		} else {

			$("#matr .error_msg").show();

		}

	});

	$("#matr input").keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $("#matr [data-confirm]").click();//Trigger search button click event
        }
    });

	$("#pwd [data-confirm]").click( function() {

		if ( $("#pwd input").val() == "12345" ) {

			$(".error_msg").hide();

			$("#pwd").fadeOut(300, function() {
				//Stuff to do *after* the animation takes place
				$("#serv").fadeIn();
			});

		} else {

			$("#pwd .error_msg").show();

		}

	});

	$("#pwd input").keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $("#pwd [data-confirm]").click();//Trigger search button click event
        }
    });


	$("#serv [data-confirm]").click( function() {
		$("#serv").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#agent").fadeIn();
		});
	});



	$("#agent [data-confirm]").click( function() {

		if ( $("#agent input").val() == "12345" ) {

			$(".error_msg").hide();

			$("#login").fadeOut(300, function() {
				//Stuff to do *after* the animation takes place
				$("#main").show().addClass("show");
			});

		} else {

			$("#agent .error_msg").show();

		}

	});

	$("#agent input").keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $("#agent [data-confirm]").click();//Trigger search button click event
        }
    });

	// const swup = new Swup();

	// bottom bar

	// popup show

	$("[data-popup]").click( function(){

		var popId = $(this).attr("data-popup");

		$(".popup_container").removeClass("show");

		$('#' + popId).show().addClass("show");

	});

	$(".popup_close").click( function(){

		$(".popup_container").removeClass("show");

	});


	$("#change_course .list_element").click( function(){

		var elValue = $(this).find("span").data("item-value");

		$('.serv_number').text(elValue);

		$("#change_course").removeClass("show");

	});



	// nav show

	$(".nav_toggle").click( function(){
		$("body").toggleClass("nav_open");
	});

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


	$('[data-toggle=mode]').click(function() {

		$('html').attr('data-theme', $('html').attr('data-theme') == 'light' ? 'dark' : 'light')

		// var html = $("html");
		//
		// if (html.data('theme') == 'light') {
	    // 	html.attr('data-theme', 'dark');
	   	// }
		// else if (html.data('theme') == 'dark') {
	    // 	html.attr('data-theme', 'light');
	   	// }
		// else {
	   	// }
	});


});
