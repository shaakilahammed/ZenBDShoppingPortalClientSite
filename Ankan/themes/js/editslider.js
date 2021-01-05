$(document).ready(function(){
	
	$('#eslipostbtn').click(function(){
	
		editSlider();
	});
    var userid;
    var postid;
    
	var date;
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var id=$(location).attr('href').split("=")[1];
	var editSlider=function(){
		
		$.ajax({
		url:"http://localhost:10022/api/sliders/"+id,
		method:"PUT",
		header:"Content-Type:application/json",
		data:{
		
            
            offerTitle:$("#eslititle").val(),
            offerPercent:$("#eslipercent").val(),
            offerDescription:$("#eslidescr").val(),
            imageLink:$("#esliimg").val(),
            productLink:$("#esliprod").val()

		},
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				window.location="/ZenBDNet/adminPanel/sliders.html";
			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});
    }
    
	var loadSliders=function(){
		$.ajax({
		url:"http://localhost:10022/api/sliders/"+id,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				var data=xmlhttp.responseJSON;
				$('#eslititle').val(data.offerTitle);
				$('#eslipercent').val(data.offerPercent);
				$('#eslidescr').val(data.offerDescription);
				$('#esliimg').val(data.imageLink);
				$('#esliprod').val(data.productLink);

				
				
				
				//$('#body').html(comment);

			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadSliders();

});