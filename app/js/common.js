$(function() {

		// fixed menu after scroll / START
	var $menu = $(".header-bottom");
	var $menu_height = $(".header-top").height();

	$(window).scroll(function(){
		if ( $(this).scrollTop() > $menu_height ){
			$menu.addClass("header-bottom__fixed");
			console.log($menu_height);
		} else if($(this).scrollTop() <= $menu_height ) {
			$menu.removeClass("header-bottom__fixed");
			console.log($menu_height);
		}
	});
	// fixed menu after scroll / END

});
