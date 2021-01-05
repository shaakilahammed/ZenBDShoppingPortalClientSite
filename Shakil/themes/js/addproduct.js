$(document).ready(function(){
    $('#ppostbtn').click(function(){
		addProduct();
		
    });
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
    var loadProducts=function(){
		$.ajax({
		url:"http://localhost:10022/api/products",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].productName+"</td><td>"+data[i].description+"</td><td>"+data[i].price+"</td><td>"+data[i].quantity+"</td><td>"+data[i].image+"</td><td>"+data[i].categoryId+"</td></tr>";
					
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
var addProduct=function(){
    $.ajax({
    url:"http://localhost:10022/api/products",
    method:"POST",
    heade:"Content-Type:application/json",
    data:{
        productName:$("#pname").val(),
        description:$("#pdescr").val(),
        price:$("#pprice").val(),
        quantity:$("#pquan").val(),
        image:$("#pimg").val(),
        categoryId:$("#pcatid").val(),
        


    },
    complete:function(xmlhttp,status){
        if(xmlhttp.status==201)
        {
            loadProducts();
            window.location.href = "../adminPanel/products.html";
            
        }
        else
        {
            console.log(xmlhttp.status+":"+xmlhttp.statusText);
            console.log(xmlhttp.responseJSON.modelState);
        }
    }
});
}
});