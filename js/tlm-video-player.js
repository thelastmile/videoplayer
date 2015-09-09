$(document).ready(function(){

	require(['data'], function(data){

		var stateObj = {
			thisId: 	null,
			navBarLength: 	0,
			clickNum: 	0
		};

		var videoSizeControl = 	function(){
				var wide = $('.videoPlayerWindow').width();
				var self = $('body').width();
					$('#thisVideo').width(wide);
			};

		var buildTutorialBar = function(items){
			var tutBarAry = [];
			for (var i = 0; i < items.length; i++){
				tutBarAry.push("<div class='navButton'>"+
					"<li name='"+items[i].tutorialName+"' id="+i+"><div class='navButtonText'><h3>"+
					items[i].tutorialName+"</h3><p></p></div></li>"+
				"</div>");	
			}
			$('.videoPlayerWindow').append('<h1>Select a Tutorial from the list.</h1>');
			$('#navBarHeader').text('TUTORIALS');
			return tutBarAry;
		};

		var buildNavBar = function(items){
			var navBarAry = [];
			for (var i = 0; i < items.length; i++){
				navBarAry.push("<div class='navButton'>"+
					"<li name='"+items[i].vidId+"' id='"+i+"'><div class='navButtonText'><h3>"+items[i].chName+" </h3><p>"+items[i].chText+" </p></div></li>"+
				"</div>");	
			}
			$('#navBarHeader').text('PLAYLIST');
			return navBarAry;
		};

		var playTheVideo = function() {
				var selectedVideo= $('#'+ stateObj.clickNum).attr('name');
				var videoPlayerHtml =	"<video id='thisVideo' controls autoplay>"+
										"<source src='"+selectedVideo+".mp4' type='video/mp4' />"+
										"</video>";
				$('.videoPlayerWindow').html(videoPlayerHtml);

				$('.videoPlayerWindow video').on('ended', function(){
					console.log('Ended');
					var testNum = stateObj.clickNum + 1;
					if(testNum !== stateObj.navBarLength){
						stateObj.clickNum++;
						$('#'+ stateObj.clickNum).trigger('click');
					}
				});
				videoSizeControl();
				$('body,html').animate({scrollTop: 80}, 500);
					return false;
			};

		$(document).ready(videoSizeControl);
		$(window).resize(videoSizeControl);

		$('.logoBar').on('click', function(){
	    window.location.reload( false );
		});

		$('#titleBar').text(data.pageTitle);

		$('#navBarData').html(buildTutorialBar(data.tutorials));


		$("#navBarData li").on('click',function() {
			stateObj.thisId = this.id;
			$('#navBarData').html(buildNavBar(data.tutorials[stateObj.thisId].navItems));
			stateObj.navBarLength = data.tutorials[stateObj.thisId].navItems.length;
			$("#navBarData li").on('click', function(){
				stateObj.clickNum = this.id;
				playTheVideo();
			});
			$('#navBarData li').first().trigger('click');
		});

	});
});
