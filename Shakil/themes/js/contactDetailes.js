$(document).ready(function(){
    
	
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var loadContacts=function(){
		$.ajax({
		url:"http://localhost:10022/api/contacts",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<strong>Phone:</strong>"+data[i].contactPhone+"</br><strong>Fax:</strong>"+data[i].contactFax+"</br><strong>Email:</strong>"+data[i].contactEmail+"</br><strong>Address:</strong>"+data[i].contactAddress+"</br>";
                    
                    
                    
                }
                $("#pp").html(str);
                

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
    loadContacts();
});