$(document).ready(function(){
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
	
	var loadOrders=function(){
		$.ajax({
		url:"http://localhost:10022/api/invoices",
		method:"GET",
		complete:function(xmlhttp,status){
			if(xmlhttp.status==200)
			{
                
				var data=xmlhttp.responseJSON;
				var str="";
				for (var i = 0; i < data.length; i++) {
					str+="<tr><td>"+data[i].userId+"</td><td>"+data[i].subtotal+"</td><td>"+data[i].shippingAddress+"</td><td>"+data[i].deliveryNumber+"</td><td>"+data[i].cardNumber+"</td><td>"+data[i].cardType+"</td><td>"+data[i].expireDate+"</td><td>"+data[i].orderDate+"</td><td>"+data[i].totalPrice+"</td><td></td><<td><a href='deleteOrders.html?id="+data[i].invoiceNumber+"'>Delete</a></td></tr>";
					
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
    loadOrders();

});