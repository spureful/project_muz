///КАРТА//
ymaps.ready(init);

var placemarks = [
	
	{
		latitude: 59.94,
		longitude: 30.25,
		hintContent: '<div class=" screencontacts__map-hint"> 6-я линия ВО 42 </div>',
		balloonContent: ['<div class=" screencontacts__map-balloon">',
						 '6-я линия ВО 42',
						 '</div>']
	}
];

var geoObjects = [];

function init() {
	var map = new ymaps.Map('map', {
		center: [59.94, 30.32],
		zoom: 12,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});

	for (var i = 0; i < placemarks.length; i++) {
		geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
			hintContent: placemarks[i].hintContent,
			balloonContent: placemarks[i].balloonContent.join('')
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/contacts/card_mark.svg',
			iconImageSize: [46, 58],
			iconImageOffset: [-23, -58]


		});
	}




	var clusterer = new ymaps.Clusterer({
       clusterIcons: [{
		href: 'img/meeting_screen/burger.png',
		size: [100, 100],
		offsset: [-50, -50]
	}],
		clusterIconContentLayout: null


	});
	
	map.geoObjects.add(clusterer);
//	map.geoObjects.add(placemark);
	clusterer.add(geoObjects);

}


///OPENMENU///

function openMenu() {
	const openBtn = document.querySelector(".menu__hamburger");
	const closeBtn = document.querySelector(".openmenu__closebtn");
	const menu = document.querySelector(".openmenu");
	
	openBtn.addEventListener("click", function() {
		menu.style.display = "flex";
		
		
	});
	
	closeBtn.addEventListener("click", function() {
		menu.style.display = "none";
		
		
	});
	}

openMenu();

/// SLIDER////

function slider() {
$(window).on("resize", function() {
	console.log(screen.width);
	
	if (screen.width <= 1280) {
		$(".inschool__slider").addClass("slider-plugin");
		
	}
	else {
		$(".inschool__slider").removeClass("slider-plugin");
	}
	
	$(".slider-plugin").slick({});
});
}

slider();

function selectCustom() {
	var selectEl = document.getElementById( 'select_yellow' );
multi( selectEl ), {
    'enable_search': true,
    'search_placeholder': 'Search...',
    'non_selected_header': null,
    'selected_header': null
};
	
}

selectCustom();

