$(document).ready(function(){
	
	$('#eppostbtn').click(function(){
	
		editProduct();
	});
    var userid;
    var postid;
    
	var date;
	var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	var id=$(location).attr('href').split("=")[1];
	var editProduct=function(){
		
		$.ajax({
		url:"http://localhost:10022/api/products/"+id,
		method:"PUT",
		header:"Content-Type:application/json",
		data:{
		
            
            productName:$("#epname").val(),
            description:$("#epdescr").val(),
            price:$("#epprice").val(),
            quantity:$("#epquan").val(),
            image:$("#epimg").val(),
            categoryId:$("#epcatid").val()

		},
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				window.location="/ZenBDNet/adminPanel/products.html";
			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});
    }
    
	var loadProducts=function(){
		$.ajax({
		url:"http://localhost:10022/api/products/"+id,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
				var data=xmlhttp.responseJSON;
				$('#epname').val(data.productName);
				$('#epdescr').val(data.description);
				$('#epprice').val(data.price);
				$('#epquan').val(data.quantity);
				$('#epimg').val(data.image);
				$('#epcatid').val(data.categoryId);
                
				
				
				//$('#epname').html(epname);

			}
			else
			{
				console.log(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadProducts();

});