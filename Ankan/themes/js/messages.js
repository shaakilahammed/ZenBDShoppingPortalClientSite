$(document).ready(function(){
    
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var loadMessages=function(){
		$.ajax({
		url:"http://localhost:10022/api/messages",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].messageName+"</td><td>"+data[i].messageEmail+"</td><td>"+data[i].messageText+"</td><td><a href='editMessage.html?id="+data[i].messageId+"'>Edit</a></td><td></td><<td><a href='deleteMessage.html?id="+data[i].messageId+"'>Delete</a></td></tr>";
					
                }
                $("#catList tbody").html(str);

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
    loadMessages();

});