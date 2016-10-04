$(document).ready(function(){

	(function(){
		//create the buttons, append them to the dom and animate them onclick:
		$body = $('body');
		var buttonsInfo = [
			{ title: 'PROJECTS' },
			{ title: 'ABOUT'},
			{ title: 'RESUME'}
		];

		var $buttonsArray = buttonsInfo.map(function(obj) {
			return $("<button class='btn'>" + obj.title + "</title>");
		});

		$('#buttons').append($buttonsArray); 

		//animate the buttons on mouseenter and leave

		$('.btn').on({
			mouseenter: function(){
				$(this).animate({"width" : "450px"}, 200);
			},
			mouseleave: function(){
				$(this).animate({"width": "400px"}, 300);
			}
		});

		//RESUME BUTTON
		// create the resume dom Element and attach it to a display none lightbox that will fade/in at resume btn onclick
		var $resume = '<Object data="./img/resume.pdf" type="application/pdf" width="70%" height="100%""></Object>';
		$resume = addToLightBox($resume);
		addOnClickEvent($resume);

		//PROJECTS BUTTON
		//create the projects lightbox component and add onlickevent.

		var projects = [{
			name: "POP WRITER",
			url: "http://www.pop-writer.com",
			img: "img/popwriter.png"
		},{
			name: "MOVIES APP",
			url: "http://www.themoviesapp.xyz",
			img: "img/movies.png"
		},{
			name: "TWITTER HEAT MAP",
			url: "https://github.com/Sushi1985/Twitter-Heat-Map",
			img: "img/twitter.png"
		},{
			name: "IMP.NYC",
			url: "http://www.imp.nyc",
			img: "img/imp.png"
		}];

		var $projects = projects.reduce(function(a, b, index){
			if(index === projects.length -1) return a + "<div class='project'><a href=" + b.url + "><img class='project-img' src=" + b.img + " /><div>" + b.name + "</div></a></div></div>";
			return a + "<div class='project'><a href=" + b.url + "><img class='project-img' src=" + b.img + " /><div>" + b.name + "</div></a></div>";
		}, '<div class="projects">');

		$projects = addToLightBox($projects);
		addOnClickEvent($projects);

		$.each($projects.find('a'), function(index, elem){
			$(elem).on('click', function(){
				$animation = $("<div id=animation></div>");
				$body.append($animation).removeClass('noscroll');
				$('#animation').css({'display' : 'block', 'width': window.screen.availWidth}).animate({'opacity': 1}, 500);
			});
		});

		//ABOUT BUTTON



		//BUTTONS onclick actions
		//action when clicking on the buttons
		$('.btn').click(function(){
			switch($(this)[0].innerHTML) {
				case 'RESUME':
					appendToBodyAndAnimate($resume);
					break;
				case 'PROJECTS':
					appendToBodyAndAnimate($projects);
					break;
				case 'ABOUT':
					console.log('About');
					break;
			}
		});

		//Walking Animation

		$("#right-side").animate({'margin-left': '-25vw' }, 20000, function(){
			$(this).css({'margin-left': window.screen.availWidth + 5 + 'vw'}).animate({'margin-left': '70vw'}, 10000);
		});

		//HELPER FUNCTIONS
		
		function addToLightBox(domElement){
			return  $('<div class="lightbox">' + domElement + '</div>');
		}

		function addOnClickEvent(domElement) {
			domElement.on('click', function(e){
				$body.removeClass('noscroll');
				$(this).animate({opacity: 0}, 500, function(){
					$(this).detach();
				});
			});
		}

		function appendToBodyAndAnimate(domElement) {
			$body.addClass('noscroll');
			$body.append(domElement);
			domElement.animate({opacity: 1}, 500);
		}

	})();

});