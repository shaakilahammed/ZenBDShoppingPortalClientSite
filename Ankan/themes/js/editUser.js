$(document).ready(function(){
	
	$('#eupostbtn').click(function(){
	
		editUser();
	});
    var userid;
    var postid;
    
	var date;
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var id=$(location).attr('href').split("=")[1];
	var editUser=function(){
		
		$.ajax({
		url:"http://localhost:10022/api/users/"+id,
		method:"PUT",
		header:"Content-Type:application/json",
		data:{
		
            
            email:$("#euemail").val(),
            address:$("#euadd").val(),
            phoneNumber:$("#euphn").val(),
            name:$("#euname").val(),
            username:$("#euuname").val(),
            password:$("#eupass").val(),
            userType:$("#eutyp").val()

		},
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				window.location="/ZenBDNet/adminPanel/users.html";
			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});
    }
    
	var loadUsers=function(){
		$.ajax({
		url:"http://localhost:10022/api/users/"+id,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				var data=xmlhttp.responseJSON;
				$('#euemail').val(data.email);
				$('#euadd').val(data.address);
				$('#euphn').val(data.phoneNumber);
				$('#euname').val(data.name);
				$('#euuname').val(data.username);
				$('#eupass').val(data.password);
				$('#eutyp').val(data.userType);

        
				
				
				//$('#body').html(comment);

			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadUsers();

});