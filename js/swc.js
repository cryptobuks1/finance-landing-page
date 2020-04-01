
	$(document).ready(function() {	

			var id = '#dialog';
		
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		
			//Set heigth and width to mask to fill up the whole screen
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			
			//transition effect		
			$('#mask').fadeIn(5000);	
			$('#mask').fadeTo("slow",1.2);	
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
				
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		
			//transition effect
			$(id).fadeIn(5000); 	
			
			//if close button is clicked
			$('.window .close').click(function (e) {
				//Cancel the link behavior
				e.preventDefault();
				
				$('#mask').hide();
				$('.window').hide();
			});		
			
			//if mask is clicked
			$('#mask').click(function () {
				$(this).hide();
				$('.window').hide();
			});		
			
			var id = '#dialog1';
		
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		
			//Set heigth and width to mask to fill up the whole screen
			$('#mask1').css({'width':maskWidth,'height':maskHeight});
			
			//transition effect		
			$('#mask1').fadeIn(5000);	
			$('#mask1').fadeTo("slow",1.2);	
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
				
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		
			//transition effect
			$(id).fadeIn(5000); 	
			
			//if close button is clicked
			$('.window .close').click(function (e) {
				//Cancel the link behavior
				e.preventDefault();
				
				$('#mask1').hide();
				$('.window').hide();
			});		
			
			//if mask is clicked
			$('#mask1').click(function () {
				$(this).hide();
				$('.window').hide();
			});
		
		});

	
