$(document).ready(function(){
	$('#yesbtn1').click(function(){
		
		DeletePost();
    });
	
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
    $('#nobtn1').click(function(){
		window.location="/ZenBDNet/adminPanel/manufactures.html";
		
	});
	var userid;
	var date;
	var id=$(location).attr('href').split("=")[1];
	var DeletePost=function(){
		console.log($("#title").val());
		console.log($("#body").val())
		$.ajax({
		url:"http://localhost:10022/api/manufactures/"+8,
		method:"Delete",
		header:"Content-Type:application/json",
		
		complete:function(xmlhttp,status){
			if(xmlhttp.status==204)
			{
				window.location="/ZenBDNet/adminPanel/manufactures.html";
			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});
	}
	var loadPosts=function(){
		$.ajax({
		url:"http://localhost:10022/api/manufactures/"+7,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				var data=xmlhttp.responseJSON;
				userid=data.postUserID;
				date=data.createdAt;
				//$("#title").html(data.postTitle);
				//$('#body').html(data.postBody);

			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadPosts();

});