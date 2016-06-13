$(document).ready(function(){

	$('.show_search').click(function(){
		//show search
		$('.js_hidden_search').slideToggle(200);
		$('.js_hidden_search_1').slideToggle(200);
		//hide menu
		$('.js_hidden_menu').hide(200);
		$('.js_hidden_menu_1').hide(200);
		$('.js_hidden_menu_2').hide(200);

	});

	$('.menu_last').click(function(){
		//show menu
		$('.js_hidden_menu').slideToggle(500);
		$('.js_hidden_menu_1').slideToggle(500);
		$('.js_hidden_menu_2').slideToggle(500);

		//hide search
		$('.js_hidden_search').hide(200);
		$('.js_hidden_search_1').hide(200);
	});

	$('.images,.js_close_button').click(function(){
		$('.hidden_content').toggle();
	});

	$('.menu_last').click(function(){
		$('.first').toggleClass('first_1');
		$('.second').toggleClass('second_1');
		$('.third').toggleClass('third_1');
	});

});

