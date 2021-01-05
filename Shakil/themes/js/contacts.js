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
					str+="<tr><td>"+data[i].contactPhone+"</td><td>"+data[i].contactFax+"</td><td>"+data[i].contactEmail+"</td><td>"+data[i].contactAddress+"</td><td><a href='editContact.html?id="+data[i].contactId+"'>Edit</a></td></tr>";
					
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
    loadContacts();

});