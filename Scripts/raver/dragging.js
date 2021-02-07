function drag(){
var nav = $('.nav');
var parent = $('.fix_mom').width();
var child= $('.draggable').width();
var L= parent - child;
 if (parent < child) {
  nav.draggable({
  axis: "x",
  cursor: "move",
  containment: 'draggable',
  distance: 10
});
 }
navWidth = 0;
$('.nav > div').each(function(index) {
    navWidth += parseInt($(this).width(), 10);
});
 nav.on( "drag", function( event, ui ) {
  if (ui.offset.left > 10) {
   ui.position.left = 10;
  }
  if (ui.position.left < L) {
    ui.position.left = L + 10;
  }
  
  
  
  
  
  
  $('nav').draggable();

});
};

$(document).ready(function(e){
	 drag();

$(window).resize(function(e) {
	 drag();
});
});