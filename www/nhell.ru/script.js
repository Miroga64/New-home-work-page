
$(function(){
		
	



	let checked = 0;
	let checked_second = 0;
	let sizeof=$(window).width();
	$(window).resize(function() {
		sizeof=$(window).width();
		if(checked || checked_second){
		$('#switch1').css('background-image','url(img/switcher_on.png)');
		$('#switch2').css('background-image','url(img/switcher.png)');
		$('#switch3').css('background-image','url(img/switcher.png)');
		$('#switch4').css('background-image','url(img/switcher.png)');
		checked=0;
		checked_second=0;
		$('.main-container__projects').animate({'right':checked_second*420+'px'},700);}
		
	});
	var example = document.getElementById('example');
    var startx = 0
    var dist = 0
  	var end = 0;
    example.addEventListener('touchstart', function(ex){
        var touchobj = ex.changedTouches[0]
        startx = parseInt(touchobj.clientX)
        ex.preventDefault()
    }, false)	
  
    example.addEventListener('touchmove', function(ex){
        var touchobj = ex.changedTouches[0]
        if(sizeof>1024){
        	dist = - (parseInt(touchobj.clientX)-startx) + (checked_second * 475);
    	}else if(sizeof>419){
    		dist = - (parseInt(touchobj.clientX)-startx) + (checked_second * 415);
    	}else{
    		dist = - (parseInt(touchobj.clientX)-startx) + (checked_second * 385);
    	}
        if($('#switchers').css('display')=='block'){
       		 if($('.main-container__projects').css('right')>='0px'){
       		 	$('.main-container__projects').css({'right':dist+'px'});
       		 }
       		 if($('.main-container__projects').css('right')<'0px'){
       		 	$('.main-container__projects').css({'right':'0px'});
       		 }
    	}
        ex.preventDefault()
    }, false)
    example.addEventListener('touchend', function(ex){
        var touchobj = ex.changedTouches[0]
        if(sizeof>1024){
        	end = - (parseInt(touchobj.clientX)-startx)
        	if(end>0){
		       	if(((end/475) > 0.5) && ((end/475) < 1.5) && (checked_second != 2)){
		        		checked_second = checked_second+1;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		       	}else if((end/475 < 0.5) || (checked_second == 2)){
		        		$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		       	}else if(((end/475)>=1.5) && (checked_second==0)){
		        		checked_second = checked_second+2;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+(checked_second-1)).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		        }else{
		        	checked_second = checked_second+1;
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        	$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		        }
		    }else{
		    	if(((end/475) < -0.5) && ((end/475) > -1.5) && (checked_second != 0)){
		    		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		       		$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		       	}else if((end/475 > -0.5) || (checked_second == 0)){
		        	$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		       	}else if(((end/475)<= -1.5) && (checked_second==2)){
		       		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+(checked_second-1)).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-2;
		        	$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		        }else{
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*475+'px'}, 400);
		        }
		    }
    	}else if(sizeof>419){
    		end = - (parseInt(touchobj.clientX)-startx)
    		if(end>0){
		       	if(((end/415) > 0.5) && ((end/415) < 1.5) && (checked_second != 3)){
		        		checked_second = checked_second+1;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		       	}else if((end/415 < 0.5) || (checked_second == 3)){
		        		$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		       	}else if(((end/415)>=1.5) && (checked_second <= 1)){
		        		checked_second = checked_second+2;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+(checked_second-1)).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		        }else{
		        	checked_second = checked_second+1;
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        	$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		        }
		    }else{
		    	if(((end/415) < -0.5) && ((end/415) > -1.5) && (checked_second != 0)){
		    		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		       		$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		       	}else if((end/415 > -0.5) || (checked_second == 0)){
		        	$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		       	}else if(((end/415)<= -1.5) && (checked_second >= 2)){
		       		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+(checked_second-1)).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-2;
		        	$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		        }else{
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*415+'px'}, 400);
		        }
		    }
    	}else{
    		end = - (parseInt(touchobj.clientX)-startx)
    			if(end>0){
		       	if(((end/385) > 0.5) && ((end/385) < 1.5) && (checked_second != 3)){
		        		checked_second = checked_second+1;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		       	}else if((end/385 < 0.5) || (checked_second == 3)){
		        		$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		       	}else if(((end/385)>=1.5) && (checked_second <= 1)){
		        		checked_second = checked_second+2;
		        		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        		$('#switch'+(checked_second-1)).css('background-image','url(img/switcher.png)')
		        		$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		        }else{
		        	checked_second = checked_second+1;
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher_on.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher.png)')
		        	$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		        }
		    }else{
		    	if(((end/385) < -0.5) && ((end/385) > -1.5) && (checked_second != 0)){
		    		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		       		$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		       	}else if((end/385 > -0.5) || (checked_second == 0)){
		        	$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		       	}else if(((end/385)<= -1.5) && (checked_second >= 2)){
		       		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+(checked_second-1)).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-2;
		        	$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		        }else{
		        	$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)')
		        	$('#switch'+checked_second).css('background-image','url(img/switcher_on.png)')
		        	checked_second = checked_second-1;
		        	$('.main-container__projects').animate({'right':checked_second*385+'px'}, 400);
		        }
		    }
    	}
        ex.preventDefault()
    }, false)
	$('.main-container__order-call,#my_projects .header__more,#order_call_mobile').on('click',function(){
		$('.telephone-form').css({'display': 'block'});
		$('.telephone-form').animate({'opacity':'1'},500);
	})
	$('.telephone-form').click(function(event){
		if((event.target== this)||(event.target == $('#telephone-form__close')[0])) {
			$('.telephone-form').animate({'opacity':'0'},500);
			setTimeout(function(){$('.telephone-form').css({'display':'none'})},500);
		}		
	});
$('#arrow_l').on('click',function(){
	if(checked != 1) {
		checked = checked + 1;
		$('.main-container__projects').animate({'right':checked*400+'px'},700);
	}
});
$('#arrow_r').on('click',function(){
	if(checked != 0) {
		checked = checked - 1;
		$('.main-container__projects').animate({'right':checked*400+'px'},700);

	}
});
	$('#switch1').on('click',function(){
		if(sizeof<420){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=0;
		$('.main-container__projects').animate({'right':checked_second*385+'px'},700);
		}else if(sizeof<1025){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=0;
		$('.main-container__projects').animate({'right':checked_second*415+'px'},700);
		}else{
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=0;
		$('.main-container__projects').animate({'right':checked_second*475+'px'},700);
		}
	
	});
	$('#switch2').on('click',function(){
		if(sizeof<420){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=1;
		$('.main-container__projects').animate({'right':checked_second*385 +'px'},700);
	}else if(sizeof<1025){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=1;
		$('.main-container__projects').animate({'right':checked_second*415 +'px'},700);
	}else{
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=1;
		$('.main-container__projects').animate({'right':checked_second*475 +'px'},700);
	}
	});
	$('#switch3').on('click',function(){
		if(sizeof<420){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=2;
		$('.main-container__projects').animate({'right':checked_second*385+'px'},700);
	}else if(sizeof<1025){
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=2;
		$('.main-container__projects').animate({'right':checked_second*415+'px'},700);
	}else{
		$(this).css('background-image','url(img/switcher_on.png)');
		$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
		checked_second=2;
		$('.main-container__projects').animate({'right':checked_second*475+'px'},700);
	
}
	});
	$('#switch4').on('click',function(){
			if(sizeof<420){
			$(this).css('background-image','url(img/switcher_on.png)');
			$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
			checked_second=3;
			$('.main-container__projects').animate({'right':checked_second*385+'px'},700);
		}else{
			$(this).css('background-image','url(img/switcher_on.png)');
			$('#switch'+(checked_second+1)).css('background-image','url(img/switcher.png)');
			checked_second=3;
			$('.main-container__projects').animate({'right':checked_second*415+'px'},700);
		}
	});
$('#services_header').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_work').offset().top }, 1000);
  e.preventDefault();
});
$('#portfolio').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_projects').offset().top }, 1000);
  e.preventDefault();
});
$('#cost').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#Price').offset().top }, 1000);
  e.preventDefault();
});
$('.main-container__menu.service').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_work').offset().top }, 1000);
  e.preventDefault();
});
$('.main-container__menu.portfolio-footer').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_projects').offset().top }, 1000);
  e.preventDefault();
});
$('.main-container__menu.cost-footer').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#Price').offset().top }, 1000);
  e.preventDefault();
});
$('#services_header_header').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_work').offset().top }, 1000);
  e.preventDefault();
});
$('#portfolio_header').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#my_projects').offset().top }, 1000);
  e.preventDefault();
});
$('#cost_header').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#Price').offset().top }, 1000);
  e.preventDefault();
});
 $('#menu_button').on('click', function(){
 	$('#header_menu_mobile').animate({'height':'213px'},500);
 	$('#menu-button-close').css({'display':'block'});
 	$('#menu_button').css({'display':'none'});
 	 });
 $('#menu-button-close').click(function(){
 	$('#header_menu_mobile').animate({'height':'0px'},500);
 	$('#menu-button-close').css({'display':'none'});
 	$('#menu_button').css({'display':'block'});
 })



})