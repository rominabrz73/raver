var det_alert1_item_notify = {
	id          :''
	,class      :''
	,closeDelay :3500 // int   ,   0 => forever
	,closeBtn   :true
	,type       :'' // '' | alert | success | warning | error | info
	,icon       :true
	,iconStr    :'' // ''| alert | success | warning | error | info | '<i class="fas fa-check-circle"></i>'
	,title      :''
	,text       :''
};
/*
$(document).on('click','.det_alert1_item .det_alert1-close-btn',function(){
	det_alert1_item_close( $(this) );
});
*/
function det_alert1_item_close( jqElement ){
	// jqElement ==> det_alert1-close-btn
	if(jqElement.hasClass('det_alert1_item')){
		jqElement.addClass('animated faster fadeOutRight');
		//jqElement.slideUp("fast",function(){
		jqElement.fadeOut("fast",function(){
			if(jqElement.length){ jqElement.remove(); }
		});
	}else if(jqElement.parents('.det_alert1_item').length){
		var jqElement_mom = jqElement.parents('.det_alert1_item');
		jqElement_mom.addClass('animated faster fadeOutRight');
		//jqElement_mom.slideUp("fast",function(){
		jqElement_mom.fadeOut("fast",function(){
			if(jqElement_mom.length){ jqElement_mom.remove(); }
		});
	}
}


$(document).on('click','.det_alert1_item .det_alert1-close-btn',function(){
	det_alert1_item_close( $(this) );
});





/*
default parameter Object:{
	id          :''
	,class      :''
	,closeDelay :3500 // int   ,   0 => forever
	,closeBtn   :true
	,type       :'' // '' | alert | success | warning | error | info
	,icon       :true
	,iconStr    :'' // ''| alert | success | warning | error | info | '<i class="fas fa-check-circle"></i>'
	,title      :''
	,text       :''
};
*/
function det_alert1_item_add( noticeObj/*={}*/ ){
	if(typeof(noticeObj)==='undefined'){ noticeObj = {}; }
	let notify = {};
	for(let i in window.det_alert1_item_notify){
		notify[i] = window.det_alert1_item_notify[i];
	}
	for(let i in notify){
		if(noticeObj.hasOwnProperty(i)){
			//if(typeof(noticeObj[i])!="undefined"){
				if(typeof(noticeObj[i])=='string'){
					notify[i] = noticeObj[i].trim();
				}else if(typeof(noticeObj[i])=='number'){
					notify[i] = noticeObj[i];
				}else if(typeof(noticeObj[i])=='boolean'){
					notify[i] = noticeObj[i];
				}
			//}
		}
	}
	if( ! $('.det_alert1').length){
		$( $('<div>') ).addClass('det_alert1 zindex_det_alert det_alert1-bottom-right').appendTo(body);
	}
	var jqElement = null;
	if(notify.type=='success'){
		jqElement = $( $('<div>') ).addClass('det_alert1_item success');
	}else if(notify.type=='warning'){
		jqElement = $( $('<div>') ).addClass('det_alert1_item warning');
	}else if(notify.type=='error'){
		jqElement = $( $('<div>') ).addClass('det_alert1_item error dark-theme');
	}else if(notify.type=='info'){
		jqElement = $( $('<div>') ).addClass('det_alert1_item info dark-theme');
	}else{
		// notify.type=='' || notify.type=='alert':
		jqElement = $( $('<div>') ).addClass('det_alert1_item');
	}
	if(notify.id){ jqElement.attr('id',notify.id); }
	if(notify.class){ jqElement.addClass(notify.class); }
	if(notify.closeBtn==true){
		$('<a href="javascript:;" class="det_alert1-close-btn"></a>').appendTo( jqElement );
	}
	if(notify.icon==true){
		$( $('<div>') ).addClass('det_alert1-icon').appendTo( jqElement );
		$( $('<div>') ).addClass('det_alert1-icon-inner').appendTo( jqElement.find('> .det_alert1-icon') );
		if(notify.iconStr=='success'){
			$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
		}else if(notify.iconStr=='warning'){
			$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
		}else if(notify.iconStr=='error'){
			$( $('<i>') ).addClass('fas fa-times-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
		}else if(notify.iconStr=='info'){
			$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
		}else if(notify.iconStr=='alert'){
			$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
		}else if(notify.iconStr!=''){
			jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner').html( notify.iconStr );
		}else{
			//notify.iconStr=='':
			if(notify.type=='success'){
				$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.type=='warning'){
				$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.type=='error'){
				$( $('<i>') ).addClass('fas fa-times-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.type=='info'){
				$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else{
				// notify.type=='' || notify.type=='alert':
				$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}
		}
	}
	$('<div>').addClass('det_alert1-text').prependTo( jqElement );
	$('<h3>').html( notify.title ).appendTo( jqElement.find('> .det_alert1-text') );
	$('<p>').html( notify.text ).appendTo( jqElement.find('> .det_alert1-text') );
	//
	jqElement.addClass('animated faster fadeInRight').prependTo( $('.det_alert1') );// اضافه کردن باکس هشدار به ابتدای باکس اصلی هشدارها.
	$('.det_alert1').scrollTop( 0 );
	if(notify.closeDelay>0){
		setTimeout(det_alert1_item_close, notify.closeDelay, jqElement);
		//setTimeout(function(){ det_alert1_item_close(jqElement); }, notify.closeDelay);
	}
}






/*
default parameter Object:{
	id          :''
	,class      :''
	,closeDelay :3500 // int   ,   0 => forever
	,closeBtn   :true
	,type       :'' // '' | alert | success | warning | error | info
	,icon       :true
	,iconStr    :'' // ''| alert | success | warning | error | info | '<i class="fas fa-check-circle"></i>'
	,title      :''
	,text       :''
};
*/
function det_alert1_item_replace( jqElement, noticeObj/*={}*/ ){
	var doReplace = true;
	if(typeof(jqElement)==='undefined'){
		doReplace = false;
	}else if(!jqElement.length){
		doReplace = false;
	}else if((' '+ jqElement.attr('class') +' ').indexOf(' det_alert1_item ')>-1){
		//jqElement = jqElement;
	}else if(jqElement.parents('.det_alert1_item').length){
		jqElement = jqElement.parents('.det_alert1_item');
	}else{
		doReplace = false;
	}
	if(typeof(noticeObj)==='undefined'){
		noticeObj = {};
		doReplace = false;
	}
	let notify = {};
	for(let i in window.det_alert1_item_notify){
		notify[i] = window.det_alert1_item_notify[i];
	}
	let noticeObj_2 = {};
	for(let i in notify){
		if(noticeObj.hasOwnProperty(i)){
			//if(typeof(noticeObj[i])!="undefined"){
				if(typeof(noticeObj[i])=='string'){
					notify[i] = noticeObj[i].trim();
					noticeObj_2[i] = notify[i];
				}else if(typeof(noticeObj[i])=='number'){
					notify[i] = noticeObj[i];
					noticeObj_2[i] = notify[i];
				}else if(typeof(noticeObj[i])=='boolean'){
					notify[i] = noticeObj[i];
					noticeObj_2[i] = notify[i];
				}
			//}
		}
	}
	let noticeObj_count   = 0;
	let noticeObj_2_count = 0;
	for(let i in noticeObj){
		noticeObj_count++;
		if(noticeObj_2.hasOwnProperty(i)){
			noticeObj_2_count++;
		}
	}
	if(noticeObj_count!=noticeObj_2_count || noticeObj_2_count==0){
		doReplace = false;
	}
	if(doReplace==true){
		//if( ! $('.det_alert1').length){
			//$( $('<div>') ).addClass('det_alert1 zindex_det_alert det_alert1-bottom-right').appendTo(body);
		//}
		jqElement.empty();//var jqElement = null;
		jqElement.removeAttr('id');
		jqElement.removeAttr('class');
		if(notify.type=='success'){
			jqElement.addClass('det_alert1_item success');
		}else if(notify.type=='warning'){
			jqElement.addClass('det_alert1_item warning');
		}else if(notify.type=='error'){
			jqElement.addClass('det_alert1_item error dark-theme');
		}else if(notify.type=='info'){
			jqElement.addClass('det_alert1_item info dark-theme');
		}else{
			// notify.type=='' || notify.type=='alert':
			jqElement.addClass('det_alert1_item');
		}
		if(notify.id){ jqElement.attr('id',notify.id); }
		if(notify.class){ jqElement.addClass(notify.class); }
		if(notify.closeBtn==true){
			$('<a href="javascript:;" class="det_alert1-close-btn"></a>').appendTo( jqElement );
		}
		if(notify.icon==true){
			$( $('<div>') ).addClass('det_alert1-icon').appendTo( jqElement );
			$( $('<div>') ).addClass('det_alert1-icon-inner').appendTo( jqElement.find('> .det_alert1-icon') );
			if(notify.iconStr=='success'){
				$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.iconStr=='warning'){
				$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.iconStr=='error'){
				$( $('<i>') ).addClass('fas fa-times-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.iconStr=='info'){
				$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.iconStr=='alert'){
				$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
			}else if(notify.iconStr!=''){
				jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner').html( notify.iconStr );
			}else{
				//notify.iconStr=='':
				if(notify.type=='success'){
					$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
				}else if(notify.type=='warning'){
					$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
				}else if(notify.type=='error'){
					$( $('<i>') ).addClass('fas fa-times-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
				}else if(notify.type=='info'){
					$( $('<i>') ).addClass('fas fa-exclamation-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
				}else{
					// notify.type=='' || notify.type=='alert':
					$( $('<i>') ).addClass('fas fa-check-circle').appendTo( jqElement.find('> .det_alert1-icon> .det_alert1-icon-inner') );
				}
			}
		}
		$('<div>').addClass('det_alert1-text').prependTo( jqElement );
		$('<h3>').html( notify.title ).appendTo( jqElement.find('> .det_alert1-text') );
		$('<p>').html( notify.text ).appendTo( jqElement.find('> .det_alert1-text') );
		//
		jqElement.addClass('animated faster fadeInRight');//jqElement.addClass('animated faster fadeInRight').prependTo( $('.det_alert1') );// اضافه کردن باکس هشدار به ابتدای باکس اصلی هشدارها.
		/*let det_alert1_prevItems_h = 0;
		$('.det_alert1> .det_alert1_item').each(function(index, element){
			if(index<jqElement.index()){
				det_alert1_prevItems_h += $(this).outerHeight(true);
			}
		});
		$('.det_alert1').scrollTop( det_alert1_prevItems_h );*/
		if(notify.closeDelay>0){
			setTimeout(det_alert1_item_close, notify.closeDelay, jqElement);
			//setTimeout(function(){ det_alert1_item_close(jqElement); }, notify.closeDelay);
		}
	}
}




