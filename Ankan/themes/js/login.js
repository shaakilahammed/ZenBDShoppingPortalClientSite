$(document).ready(function(){
	
	
	

var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	

	$("#submitbtn").click(function(){
		addUser();
		//document.location.href="index.html";
	});
	$("#loginsubmit").click(function(){
		loginUser();
		//var url="http://localhost/MyBlog/index.html";
		//$(location).attr('href',url);
		//document.location.href="index.html";
	});
	var loginUser=function(){
		var username1=$("#uname").val();
		var password1=$("#pass").val();
		if($("#uname").val() == "" && $("#pass").val() == "")
		{
			$('#nameErr').show();
			$('#nameErr').html("username required");
			$('#passErr').show();
			$('#passErr').html("Password required");
		}
		else if(username1 == "")
		{
            $('#nameErr').html("username required");
            $('#passErr').hide();
		}
		else if(password1 == "")
		{
            $('#passErr').html("password required");
            $('#nameErr').hide();
		}
		else
		{
		$.ajax({
		url:"http://localhost:10022/api/users",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				//console.log("hello world");
				var data=xmlhttp.responseJSON;
				var uusername=$("#uname").val();
				var ppassword=$("#pass").val();
				var str="";
				var count=0;
				for (var i = 0; i < data.length; i++) {
					if(count<1){
						if(uusername==data[i].username && ppassword==data[i].password)
						{

							count++;
							Cookies.set("username",uusername);
			                 Cookies.set("password",ppassword);
			                 Cookies.set("userid",data[i].userId);
			                username = Cookies.get('username');
			                 password = Cookies.get('password');
			                 userid = Cookies.get('userid');
							
							if(data[i].userType=="admin")
							{
								window.location="/ZenBDNet/adminPanel/index.html";
								
							}
							else
							{
								window.location="/ZenBDNet/userPanel/index.html";

							}




						}
					}
					
				}

				//if(count==0)
					//$("#err").html("incorrect");
			}
			else
			{
				$("#err").html("Invalid Username or Password");
			}
		}
	});
	}
	}
        var addUser=function(){
        // var name=$("#name").val();
        // var email=$("#email").val();
        // var uname=$("#uname").val();
        // var password=$("#password").val();
		// var cpassword=$("#cpassword").val();
		
		var email=$("#email").val();
		var address=$("#address").val();
		var phoneNumber=$("#phn").val();
		var name=$("#name").val();
		var username=$("#uname").val();
		var password=$("#password").val();

        if(name=="")
        {
        	$("#namee").html("Name is required");
        	//$("#emaile").html("email required");
        	//$("#unamee").html("uname required");
        	//$("#passe").html("password required");
        	//$("#cpasse").html("confirm password required");
		}
		else if(username=="")
        {
        	$("#unamee").html("User Name is required");
        }
        else if(email=="")
        {
        	$("#emaile").html("Email is required");
        }
        
        else if(password=="")
        {
        	$("#passe").html("Password is required");
        }
        else if(phoneNumber=="")
        {
        	$("#phne").html("Phone Number is required");
        }
        else if(address=="")
        {
        	$("#adde").html("Address is required");
        }
        else{
		console.log("success");
		
		$.ajax({
		url:"http://localhost:10022/api/users",
		method:"POST",
		header:"Content-Type:application/json",
		data:{
			email:$("#email").val(),
			address:$("#address").val(),
			phoneNumber:$("#phn").val(),
			name:$("#name").val(),
			username:$("#uname").val(),
			password:$("#password").val(),
			userType:$("#utype").val()
		},
		complete:function(xmlhttp,status){
			if(xmlhttp.status==201)
			{
				window.location.href="/ZenBDNet/Login.html";
				//move();
				//alert("Created");
				//$("#msg").html("Created");
				//console.log("success");
				//header("http://localhost/MyBlog/index.html");
				//document.location.href=ur;
			}
			else
			{
				console.log("failed");
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);

				console.log(xmlhttp.responseJSON.modelState);




			}
		}
	});
	}
	}
});