$(window).ready(function() {
		
	cola();
	colb()
		
		})

$(window).on('resize', function(){

		cola();
	colb();
	
	})

function cola(){
	
	 var h = window.innerHeight;
	 var height= h;
	  $('.col-a-profile').height(height-60);
}
function colb(){
	
	 var h = window.innerHeight;
	 var height= h  ;
	  $('.box-profile').height(height-70);
}
	