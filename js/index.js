$(document).ready(function(){
  // 모바일메뉴
  $(".mob_btn").click(function(){
		$(".moMenu").stop().fadeIn(500, function(){
			$(".moMenu_inner").stop().animate({right:"0"});
		});    
  });

  $(".close_btn").click(function(){  
    $(".moMenu_inner").stop().animate({right:"-100%"});
    $(".moMenu").stop().fadeOut();
  });	
});