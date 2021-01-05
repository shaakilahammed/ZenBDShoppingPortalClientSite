$(document).ready(function(){
    $('#mpostbtn').click(function(){
		addCategory();
		
    });
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
					str+="<tr><td>"+data[i].messageName+"</td><td>"+data[i].messageEmail+"</td><td>"+data[i].messageText+"</td></tr>";
					
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
var addCategory=function(){
    $.ajax({
    url:"http://localhost:10022/api/messages",
    method:"POST",
    heade:"Content-Type:application/json",
    data:{
        messageName:$("#mname").val(),
        messageEmail:$("#memail").val(),
        messageText:$("#mtxt").val()
        
    },
    complete:function(xmlhttp,status){
        if(xmlhttp.status==201)
        {
            loadMessages();
            window.location.href = "../adminPanel/messages.html";
            
        }
        else
        {
            console.log(xmlhttp.status+":"+xmlhttp.statusText);
        }
    }
});
}
});