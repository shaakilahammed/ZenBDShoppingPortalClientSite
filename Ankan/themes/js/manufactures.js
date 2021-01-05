$(document).ready(function(){
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	
	var loadManufactures=function(){
		$.ajax({
		url:"http://localhost:10022/api/manufactures",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].picture+"</td><td><a href='editManufacture.html?id="+data[i].manufactureId+"'>Edit</a></td><td></td><<td><a href='deleteManufacture.html?id="+data[i].manufactureId+"'>Delete</a></td></tr>";
					
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
    loadManufactures();

});