$(document).ready(function(){
    $('#slipostbtn').click(function(){
		addSlider();
		
    });
    var	username = Cookies.get('username');
var	 password = Cookies.get('password');
var	 userid = Cookies.get('userid');
    var loadSliders=function(){
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
                $("#catList tbody").html(str);

			}
			else
			{
				$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
			}
		}
	});

	}
var addSlider=function(){
    $.ajax({
    url:"http://localhost:10022/api/sliders",
    method:"POST",
    heade:"Content-Type:application/json",
    data:{
        offerTitle:$("#slititle").val(),
        offerPercent:$("#slipercent").val(),
        offerDescription:$("#slidescr").val(),
        imageLink:$("#sliimg").val(),
        productLink:$("#sliprod").val()
        
        


    },
    complete:function(xmlhttp,status){
        if(xmlhttp.status==201)
        {
            loadSliders();
            window.location.href = "../adminPanel/sliders.html";
            
        }
        else
        {
            console.log(xmlhttp.status+":"+xmlhttp.statusText);
        }
    }
});
}
});