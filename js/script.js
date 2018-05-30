$(document).ready(function(){
	$(".unit.categoryList .heading").on("click", function(){
		$(this).next().toggle();
	});

	//Firefox
	$('#carouselMini').bind('DOMMouseScroll', function(e){
		if (e.originalEvent.detail > 0) {
			//scroll down
			$(this).carousel('next');
		} else {
			//scroll up
			$(this).carousel('prev');
		}

		//prevent page fom scrolling
		return false;
	});

	//IE, Opera, Safari
	$('#carouselMini').bind('mousewheel', function(e){
		if (e.originalEvent.wheelDelta < 0) {
			//scroll down
			$(this).carousel('next');
		} else {
			//scroll up
			$(this).carousel('prev');
		}

		//prevent page fom scrolling
		return false;
	});



	$("#thumbs li a").click(function() {
		$('#thumbs li').removeClass('active');
		$(this).parent().addClass('active');
		$("#wrapperSlides img").attr({"src": $(this).attr("href"), "title": $("> img", this).attr("title")
		});

		/*$("#wrapperSlides img").hide().attr(
			{"src": $(this).attr("href"), "title": $("> img", this).attr("title")
		});*/

		$("#wrapperSlides h2").html($("> img", this).attr("title"));
		
		return false;
	});

	$("#wrapperSlides>img").load(function(){$("#wrapperSlides>img:hidden").fadeIn("slow")});

	//google map integration
	function initialize() {
	var map_canvas = document.getElementById('mapCanvas');
		var map_options = {
			center: new google.maps.LatLng(40.1843189,44.5155567),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options)
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	
	/*$('.modalDialog').click(function(e) {
		//$this = $(this);
		alert("aasas").show();
		alert(e.target.html()).show();
		if( e.target.hasClass(".carousel-inner")){
			alert("inner").show();
		}
		if( e.target.hasClass(".carousel-control")) {
			alert("control").show();
		} else {
			$(".modalDialog").css('opacity: 0');	
		}
	});*/

	/*
				if ((inner.is(e.target) && inner.has(e.target).length === 0) 
					|| (controls.is(e.target) &&  controls.has(e.target).length === 0))
				{
					alert("inner or control").show();
				} else {
					//alert("rr").show();
					
					$(".modalDialog").css('opacity: 0.1');
				}*/


/*		modalDialog.hide(function() {
		$('.modalDialog:target').css({"opacity": "0","pointer-events": "none", "display": "block"});
		});*/




});
/*
$( window ).resize(function() {
	var height = $( ".modalDialog > div" ).css( "height" );
	var margintop = -0.5*height;
	$( ".modalDialog > div" ).css("margin-top", margintop);
});*/

/*
$.getJSON('js/data.json', function (data){
	var text = '';
	for (var i = data.length - 1; i >= 0; i--) {
		text = text + ('\nname: ' + data[i].name + '\nage: ' + data[i].age + '\nlocation: ' + data[i].location);
		for (var j = data[i].friends.length - 1; j >= 0; j--) {
			text += data[i].friends[j] + ",";
		};
	};
	alert(text);

});
	*/
