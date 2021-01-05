$(document).ready(function(){
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
    var id=$(location).attr('href').split("=")[1];

var loadCheckout=function(){
    $.ajax({
    url:"http://localhost:10022/api/products/10003",
    method:"GET",
    complete:function(xmlhttp,status){
        if(xmlhttp.status==200)
        {
            var data=xmlhttp.responseJSON;
            var str="";
                str+="<tr><td></td><td>"+data.productName+"</td><td>"+data.quantity+"</td><td>"+data.price+"</td><td>"+data.price*data.quantity+"</td></tr>"; 
            $("#id tbody").html(str);
            

        }
        else
        {
            console.log(xmlhttp.responseJSON);
            $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
        }
    }
});

}
loadCheckout();

// $("#checkout").click(function(){
//     window.location="../userPanel/shipping.html";
//     //loadCheckout();

// });



});