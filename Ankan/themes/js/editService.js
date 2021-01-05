$(document).ready(function(){
	
	$('#eserpostbtn').click(function(){
	
		editService();
	});
    var userid;
    var postid;
    
	var date;
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var id=$(location).attr('href').split("=")[1];
	var editService=function(){
		
		$.ajax({
		url:"http://localhost:10022/api/services/"+id,
		method:"PUT",
		header:"Content-Type:application/json",
		data:{
		
            
            serviceName:$("#esername").val(),
            serviceDetails:$("#eserdet").val()
            

		},
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				window.location="/ZenBDNet/adminPanel/services.html";
			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});
    }
    
	var loadServices=function(){
		$.ajax({
		url:"http://localhost:10022/api/services/"+id,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				var data=xmlhttp.responseJSON;
				$('#esername').val(data.serviceName);
				$('#eserdet').val(data.serviceDetails);                
				
				
				//$('#body').html(comment);

			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadServices();

});