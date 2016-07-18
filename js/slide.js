function initsunny()
{ 

	if($( window ).width() <= 640)
	{
		$("#head_logo").attr("src","img/logo36.jpg");		
	}
	else
	{	
		$("#head_logo").attr("src","img/logo.jpg");	
	}
	if ($('#s1_full').height() > 0)
	{
		$('#div_container').css("height", $('#s1_full').height());
		$('#div_carousel').css("height", $('#s1_full').height());
		$('#div_inner').css("height", $('#s1_full').height());
	}    
      
    /*
	 $('#btn_top').css("padding", "5px");
	 $('#btn_top').css("box-shadow", "2px 2px 3px black");
	 $('#btn_top').css("width", "120px");
	 $('#btn_top').css("height", "20px");
	 $('#btn_top').css("right", "5px");
	 $('#btn_top').css("bottom", "5px");
	 $('#btn_top').css("position", "fixed");
	 $('#btn_top').css("z-index", "15");*/
	  
	
}	


window.onresize = function(event) {
	if($( window ).width() <= 640)
	{	
		
		$("#head_logo").attr("src","img/logo36.jpg");			
	}
	else
	{		
		$("#head_logo").attr("src","img/logo.jpg");	
	}
	if ($('#s1_full').height() > 0)
	{
		$('#div_container').css("height", $('#s1_full').height());
		$('#div_carousel').css("height", $('#s1_full').height());
		$('#div_inner').css("height", $('#s1_full').height());
	}
	
};

$(window).on("orientationchange",function(){
  if($( window ).width() <= 640)
	{	
		
		$("#head_logo").attr("src","img/logo36.jpg");			
	}
	else
	{		
		$("#head_logo").attr("src","img/logo.jpg");	
	}
	if ($('#s1_full').height() > 0)
	{
		$('#div_container').css("height", $('#s1_full').height());
		$('#div_carousel').css("height", $('#s1_full').height());
		$('#div_inner').css("height", $('#s1_full').height());
	}
});	
