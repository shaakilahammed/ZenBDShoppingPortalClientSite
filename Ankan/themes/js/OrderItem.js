$(document).ready(function(){
	
	var username = Cookies.get('username');
	var	password = Cookies.get('password');
	var	userid = Cookies.get('userid');
	
	


	var loadOrders=function(){
		$.ajax({
		url:"http://localhost:10022/api/invoices/user/"+userid,
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].invoiceNumber+"</td><td>"+data[i].totalPrice+"</td><td>"+data[i].shippingAddress+"</td><td>"+data[i].deliveryNumber+"</td><td><a href='../userPanel/orderDetailes.html?id="+data[i].invoiceNumber+"'>Order Details</a></td></tr>";
					
                    
                    
                }
                $("#orders tbody").html(str);
                

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
	loadOrders();
	

});