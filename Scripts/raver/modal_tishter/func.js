$(document).ready(function(){
	var modal_tishter_num = 900000;
	$.each($(document).find('.modal_tishter_black'),function(index, element){
		if(typeof($(element).attr("id"))=='undefined'){
			// Relative Modal:
			modal_tishter_num++;
			var modal_tishter_id = 'modal_tishter_'+modal_tishter_num;
			$(element).attr("id", modal_tishter_id);
			$(element).parents(".modal_tishter").find("> .tishter_modal_btn_open").attr("data-target", '#'+modal_tishter_id);
		}else{
			// Absolute Modal (modal id):
		}
		$(element).detach().prependTo( $("body") );
	});
	/*$(document).on('click',".modal_tishter> .tishter_modal_btn_open",function(e){
		modal_tishter_open( $(this) );
	});
	$(document).on('click',".tishter_modal_btn_open",function(e){
		modal_tishter_open( $(this) );
	});*/
	$(document).on('click',".tishter_modal_btn_open",function(){
		// $( $(this).attr("data-target") ).fadeIn("fast");
		modal_tishter_open( $(this) );
	});
	$(document).on('click',".modal_tishter_btn_close",function(){
		modal_tishter_close( $(this).parents(".modal_tishter_black") );
	});
});
function modal_tishter_open(obj){
	var modal_obj = $("<div>");// --> .modal_tishter_black
	var target = obj.attr("data-target");
	if(typeof(target)=='undefined'){
		//modal_obj = obj.parent().find("> .modal_tishter_black");
		modal_obj = $(target);
	}else{
		modal_obj = $(target);
	}
	modal_obj.fadeIn("fast");
}
function modal_tishter_close(modal_obj){
	// modal_obj --> .modal_tishter_black
	modal_obj.fadeOut('fast');
}

