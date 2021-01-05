$(document).ready(function(){
    $('#cpostbtn').click(function(){
		addCategory();
		
    });
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
					str+="<tr><td>"+data[i].categoryName+"</td></tr>";
					
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
    url:"http://localhost:10022/api/categories",
    method:"POST",
    heade:"Content-Type:application/json",
    data:{
        categoryName:$("#cname").val()
        
    },
    complete:function(xmlhttp,status){
        if(xmlhttp.status==201)
        {
            loadCategories();
            window.location.href = "../adminPanel/categories.html";
            
        }
        else
        {
            console.log(xmlhttp.status+":"+xmlhttp.statusText);
        }
    }
});
}
});