$(function(){
	if($(".zindex_container_khoshe_copy_under").length){
		if(cols_count>1){
			$(".zindex_container_khoshe_copy_under").hide();
		}
	}
	$(document).on('click',".tishter_modal_btn_open",function(e){
	//$(".modal_tishter> .tishter_modal_btn_open").click(function(e){
		modal_tishter_open( $(this) );
	});
	
	
	$(document).on('click',".modal_tishter_black .modal_tishter_btn_close",function(e){
	//$(".modal_tishter> .modal_tishter_black> .modal_tishter_btn_close").click(function(e){
		modal_tishter_close( $(this).parents(".modal_tishter_black") );
		////modal_tishter_close( $(this) );
	});/*
	$(document).on('click dblclick mousedown',".modal_tishter_black",function(e){
	//$(".modal_tishter> .modal_tishter_black").on('click dblclick mousedown',function(e){
		if($(e.target).hasClass('modal_tishter_black') ){
			modal_tishter_close( $(this) );
		}
	});/*
	$(document).on('click dblclick mousedown',".modal_tishter_black> .modal_tishter_centeral",function(e){
	//$(".modal_tishter> .modal_tishter_black> .modal_tishter_centeral").on('click dblclick mousedown',function(e){
		if($(e.target).hasClass('modal_tishter_centeral')){
			modal_tishter_close( $(this).parent() );
		}
		////modal_tishter_close( $(this) );
	});*/
	
	
	window.addEventListener("orientationchange",function(){
		//alert( screen.orientation.angle );
		$.each([$(document).find('.modal_tishter_black')],function(index, element){
		//$('.modal_tishter> .modal_tishter_black').each(function(index, element) {
			if($(this).is(":visible")){
				modal_tishter_size($(this));
			}
		});
	});
	$(window).on('resize',function(){
		$.each([$(document).find('.modal_tishter_black')],function(index, element) {
		//$('.modal_tishter> .modal_tishter_black').each(function(index, element) {
			if($(this).is(":visible")){
				modal_tishter_size($(this));
			}
		});
	});
});


function modal_tishter_size(obj){
	//  obj  ===>  $('.modal_tishter_black')
	var w_black = obj.width();
	var h_black = 0;
	var boxMom_w = w_black;
	var boxMom_h = 0;
	if($("._Layout4cols_container_main").length){
		$("._Layout4cols_container_main").css({
			'overflow-x':'hidden'//,'overflow-y':'hidden'
		});
		h_black = $("._Layout4cols_container_main").height();
		//if($("._Layout4cols_topnavbar_main").length){
			//h_black = h_black - $("._Layout4cols_topnavbar_main").height();
		//}
		boxMom_h = h_black;
		if(cols_count==1){
			if($("._Layout4cols_container_main> ._Layout4cols_col_a_btn").length){
				$("._Layout4cols_container_main> ._Layout4cols_col_a_btn").css({'display':'none','visibility':'hidden'});
			}
			if(window._layout4cols_col_a_open==true){
				if($(".zindex_container_department").length){
					if(obj.find("> .modal_tishter_centeral").length){
						boxMom_h = boxMom_h - $(".zindex_container_department").height();
						if(boxMom_h<0){ boxMom_h = 0; }
					}
				}else{
					if(obj.find("> .modal_tishter_centeral").length){
						boxMom_h = boxMom_h;
					}
				}
			}else{
				if($(".zindex_container_khoshe_copy_under").length){
					if(obj.find("> .modal_tishter_centeral").length){
						boxMom_h = boxMom_h - $(".zindex_container_khoshe_copy_under").height();
						if(boxMom_h<0){ boxMom_h = 0; }
					}
				}
			}
		}else{
			if($(".zindex_container_khoshe_copy_under").length){
				if(obj.find("> .modal_tishter_centeral").length){
					boxMom_h = boxMom_h - $(".zindex_container_khoshe_copy_under").height();
					if(boxMom_h<0){ boxMom_h = 0; }
				}
			}
		}
		obj.height(h_black);
		if(obj.find("> .modal_tishter_centeral").length){
			obj.find("> .modal_tishter_centeral").css({
				'height':boxMom_h+'px','margin-top':(h_black-boxMom_h)+'px'
			});
		}
	}else{
		obj.css('height','100vh');
		h_black = obj.height();
		boxMom_h = h_black;
		if(obj.find("> .modal_tishter_centeral").length){
			obj.find("> .modal_tishter_centeral").css({
				'height':boxMom_h+'px','margin-top':(h_black-boxMom_h)+'px'
			});
		}
	}
	if(obj.find("> .modal_tishter_centeral> .modal_tishter_box").length){
		var box = obj.find("> .modal_tishter_centeral> .modal_tishter_box");
		var box_w     = 0;
		var box_w_max = 0;
		var box_h     = 0;
		var box_h_max = 0;
		if($("._Layout4cols_container_main> ._Layout4cols_container> ._Layout4cols_row> ._Layout4cols_col_b").length){
			box_w     = $(window).width()-(60);
			box_w_max = $("._Layout4cols_container_main> ._Layout4cols_container> ._Layout4cols_row> ._Layout4cols_col_b").width()-(col_mar_lr*2);
			box_h     = 'auto';
			box_h_max = boxMom_h-14;
			if(cols_count==1){
				box_w = $(window).width()-2;
				box_w_max = box_w;
				box_h     = 'auto';
				box_h_max = (boxMom_h-2);
			}else if(cols_count==2){
				box_w    = $(window).width()-(col_mar_lr*2);
				box_w_max = box_w;
				box_h     = 'auto';
				box_h_max = (boxMom_h-2);
			}
		}else{
			box_w     = $(window).width()-(60);
			box_w_max = $(window)-(col_mar_lr*2);
			box_h     = 'auto';
			box_h_max = boxMom_h-14;
			if(cols_count==1){
				box_w = $(window).width()-2;
				box_w_max = box_w;
				box_h     = 'auto';
				box_h_max = (boxMom_h-2);
			}
		}
		box.css({
			
			'width':box_w+'px','max-width':box_w_max+'px','min-width':box_w_max+'px',
			'height':box_h,'max-height':box_h_max+'px','min-height':(box_h_max>200?200:box_h_max)+'px'
		});
		/*window.modal_tishter_close_setT = setTimeout(function(){
			var modal_tishter_box_w        = obj.find(".modal_tishter_box_close").parent().width();
			var modal_tishter_box_closex_w = obj.find(".modal_tishter_box_close").width();
			obj.find(".modal_tishter_box_close").css({
				'margin-left': (modal_tishter_box_w-(modal_tishter_box_closex_w+20))
			});
		},100);*/
	}
	/*if(obj.find("> .modal_tishter_centeral> .modal_tishter_box").length){
		var w_box   = 0;
		if(w_black>1000){
			w_box = w_black-500;
		}else if(w_black>600){
			w_box = w_black-300;
		}else{
			w_box = w_black-30;
		}
		if(boxMom_h<60){
			obj.find("> .modal_tishter_centeral> .modal_tishter_box").css({
				'width':w_box+'px',//'width':'auto','max-width':w_box+'px',
				'height':'auto','max-height':boxMom_h+'px'
			});
		}else if(boxMom_h<100){
			obj.find("> .modal_tishter_centeral> .modal_tishter_box").css({
				'width':w_box+'px',//'width':'auto','max-width':w_box+'px',
				'height':'auto','max-height':(boxMom_h-10)+'px'
			});
		}else{
			obj.find("> .modal_tishter_centeral> .modal_tishter_box").css({
				'width':w_box+'px',//'width':'auto','max-width':w_box+'px',
				'height':'auto','max-height':(boxMom_h-40)+'px'
			});
		}
	}*/
}
function modal_tishter_open(obj){
	var target = obj.attr("data-target");
	if(typeof(target)=='undefined'){
		obj = obj.parent().find("> .modal_tishter_black");
	}else{
		obj = $(target);
	}
	zindex_container_khoshe_copy__();
	var zindex_highest       = parseInt(zindex_highest_val());
	var zindex_modal_tishter = parseInt(zindex_modal_tishter_highest_val());
	var zindex_new = 0;
	if(zindex_highest>zindex_modal_tishter){
		zindex_new = zindex_highest+1;
	}else{
		zindex_new = zindex_modal_tishter+1;
	}
	if(obj.hasClass('zindex_modal_tishter')){
		obj.removeClass('zindex_modal_tishter');
	}
	if(zindex_new==0){ zindex_new = 9999991; }
	obj.css('z-index',zindex_new);
	modal_tishter_size(obj);
	obj.fadeIn('fast');
}
function modal_tishter_close(obj){
	/*if(obj.hasClass('modal_tishter_black') ){
		//obj = obj;
	}else if(obj.hasClass('modal_tishter_centeral') ){
		obj = obj.parent();
	}else if(obj.hasClass('modal_tishter_btn_close') ){
		obj = obj.parents(".modal_tishter_black");
	}*/
	//
	if(cols_count==1){
		if($("._Layout4cols_container_main> ._Layout4cols_col_a_btn").length){
			$("._Layout4cols_container_main> ._Layout4cols_col_a_btn").css({'display':'block','visibility':'visible'});
		}
	}else{
		if($("._Layout4cols_container_main> ._Layout4cols_col_a_btn").length){
			$("._Layout4cols_container_main> ._Layout4cols_col_a_btn").css({'display':'none','visibility':'hidden'});
		}
	}
	obj.fadeOut('fast',function(){
		zindex_container_khoshe_copy__();
		if($(".zindex_container_khoshe_copy_under").length){
			////if($(".zindex_container_khoshe_copy_under").is(":visible")){
				$(".zindex_container_khoshe_copy_under").fadeOut();
			////}
		}
		$("._Layout4cols_container_main").css({
			'overflow-x':container_main_overflow_x//,'overflow-y':container_main_overflow_y
		});
		if(window.modal_tishter_close_setT){
			clearTimeout(window.modal_tishter_close_setT);
		}
	});
}

function zindex_highest_val(){
	var maxZ = Math.max.apply(null,$.map($('body > *'), function(e,n){
	   if($(e).css('position')=='absolute' || $(e).css('position')=='fixed')
			return parseInt($(e).css('z-index'))||1 ;
	   })
	);
	return maxZ;
}
function zindex_modal_tishter_highest_val(){
	var zindex = 0;
	$.each([$(document).find('.modal_tishter_black')],function(index, element) {
		if($(this).is(":visible")){
			var zindex_this = $(this).css('z-index');
			if(zindex_this>zindex){
				zindex = zindex_this;
			}
		}
	});
	return zindex;
}