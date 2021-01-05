$(document).ready(function(){
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	
	var loadContacts=function(){
		$.ajax({
		url:"http://localhost:10022/api/sliders",
		method:"GET",
		
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].offerTitle+"</td><td>"+data[i].offerPercent+"</td><td>"+data[i].offerDescription+"</td><td>"+data[i].imageLink+"</td><td>"+data[i].productLink+"</td></tr>";
                    
                    
                    
                }
                $("#catList").html(str);
                

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
    loadContacts();



    var loadFeatures=function(){
		$.ajax({
		url:"http://localhost:10022/api/products",
		method:"GET",
		
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].productName+"</td><td>"+data[i].description+"</td><td>"+data[i].price+"</td><td>"+data[i].quantity+"</td><td>"+data[i].image+"</td><td>"+data[i].categoryId+"</td><td><a href='checkout.html?id="+data[i].productId+"'>Checkout</a></td></tr>";
                    
                    
                   // console.log($qq);
				}
				
				
                $("#feature").html(str);
                

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadFeatures();
	





	// $("#checkoutbtn").click(function(){
	// 	window.location="../userPanel/checkout.html";
		

	// });

	
	





    var loadManufeatures=function(){
		$.ajax({
		url:"http://localhost:10022/api/manufactures",
		method:"GET",
		
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].picture+"</td></tr>";
                    
                    
                    
                }
                $("#manufacture").html(str);
                

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
    loadManufeatures();

});