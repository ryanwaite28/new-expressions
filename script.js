// JavaScript File

$(document).ready(function(){
	
	var menuIcon = $('#menu-icon');
	
	var linksList = $('.links-list');
	
	var subList = $('.links-list li ul');
	
	var sociaList = $('.social-list');
	
	var navBar = $('.nav-div');
	
	var mainContain = $('.main-contain')
	
	$('.present-img').append('<button type="button">Add To Cart</button>');
	
	menuIcon.click(function () {

		if(navBar.css("height") != "400px") {
			navBar.css("height", "400px");
			mainContain.css("height", "calc(100vh - 400px)");
			linksList.css({
				'display': 'block',
				'overflow-y': 'scroll',
				'width': '100%',
				'height': '215px',
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

function addBtn() {
	console.log('Added Button');
	
	var btn = document.createElement('button');
	
	$('.present-img').append('The');
}

addBtn();