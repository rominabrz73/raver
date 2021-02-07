$(function chatpage(){
	
	 var h = window.innerHeight;
   
  var profileHeight=$('.detprofile_chat').height();
  var newMessageHeight=$('.sendNewMessage').height();
  var totalHeight=$('.MessageActionTab') .height();
 var  header =$('.header') .height();
 
  var remHeight=h -(profileHeight+newMessageHeight+header+30);
  
  
  $('.currentMessages').height(remHeight);
  if(screen.width<768){
    $(".Showmessage").css("position", "relative !important");
$( ".msg_user_on_chat" ).each(function() {
   $(".msg_user_on_chat").css("position", "absolute !important");

  })
  }
	
     })





$(document).ready(function(){
	
	
	chatpage()
	
	
	})