function initsunny()
{ 

	if($( window ).width() <= 640)
	{
		$("#head_logo").attr("src","img/logo_small.jpg");		
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
}	


window.onresize = function(event) {
	if($( window ).width() <= 640)
	{	
		
		$("#head_logo").attr("src","img/logo_small.jpg");			
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
	
