function initsunny()
{   
	if($( window ).width() <= 640)
	{		
			
		$('#leftControl').css("display", "block");	
		$('#leftControl').css("height", "30");
		$('#rightControl').css("display", "block");	
		$('#rightControl').css("height", "30");
		$("#head_logo").attr("src","img/logo72.jpg");		
	}
	else
	{
		$('#leftControl').css("display", "block");	
		$('#leftControl').css("height", "60");
		$('#rightControl').css("display", "block");	
		$('#rightControl').css("height", "60");	
		$("#head_logo").attr("src","img/logo.jpg");	
	}
	$('#div_container').css("height", $('#s1_full').height());
	$('#div_carousel').css("height", $('#s1_full').height());
	$('#div_inner').css("height", $('#s1_full').height());
}	


window.onresize = function(event) {
	if($( window ).width() <= 640)
	{		
			
		$('#leftControl').css("display", "block");	
		$('#leftControl').css("height", "30");
		$('#rightControl').css("display", "block");	
		$('#rightControl').css("height", "30");			
		$("#head_logo").attr("src","img/logo72.jpg");			
	}
	else
	{
		$('#leftControl').css("display", "block");	
		$('#leftControl').css("height", "60");
		$('#rightControl').css("display", "block");	
		$('#rightControl').css("height", "60");	
		$("#head_logo").attr("src","img/logo.jpg");	
	}
	$('#div_container').css("height", $('#s1_full').height());
	$('#div_carousel').css("height", $('#s1_full').height());
	$('#div_inner').css("height", $('#s1_full').height());
	
};
	
