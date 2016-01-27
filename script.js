// JavaScript File

$(document).ready(function(){
	
	var menuIcon = $('#menu-icon');
	
	var linksList = $('.links-list');
	
	var subList = $('.links-list li ul');
	
	var sociaList = $('.social-list');
	
	var navBar = $('.nav-div');
	
	var mainContain = $('.main-contain')
	
	$('.col-md-4').append('<center><input class="add-btn" style="margin: 0" type="button" value="Add To Cart"/></center>');
	
	menuIcon.click(function () {

		if(navBar.css("height") == "55px") {
			navBar.css("height", "100vh");
			mainContain.css("height", "0px");
			linksList.css({
				'display': 'block',
				'overflow-y': 'scroll',
				'width': '100%',
				'height': '60vh',
				'border-bottom': '1px solid black',
			});
			subList.css("display", "block");
			sociaList.css("display", "block");
		}
		else {
			navBar.css("height", "55px");
			mainContain.css("height", "calc(100vh - 55px)");
			linksList.css("display", "none");
			subList.css("display", "none");
			sociaList.css("display", "none");
		}
		
	});
	
});

function addItem() {

}
