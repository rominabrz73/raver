




$(document).ready(function(){
	
	$(".active").click(function(){
			
		if($(this).parent().find(".dropdown").hasClass("dropdown-content")){
			$(this).parent().find(".dropdown").removeClass('dropdown-content').addClass('drop-none');
		}else{
			$(this).find(".dropdown").addClass('dropdown-content').removeClass('drop-none');
			 return false;
			 
		}
	})

 
	
	
	})