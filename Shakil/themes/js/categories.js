$(document).ready(function(){
	
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	
	var loadCategories=function(){
		$.ajax({
		url:"http://localhost:10022/api/categories",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].categoryName+"</td><td></td><<td><a href='deleteCategory.html?id="+data[i].categoryId+"'>Delete</a></td></tr>";
					
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
    loadCategories();

});