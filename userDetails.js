$(document).ready(function () {
	const urlParams = new URLSearchParams(window.location.search);
	const id= urlParams.get('id');

    var jsonObj = [];
    $.getJSON("http://jsonplaceholder.typicode.com/users/"+id, function (result) {
       
           $('#header').append("<a href='index.html'>"+"Users "+" </a> > "+result.name)
          $('#postsHeader').append("Posts by "+result.name)
          $('#userName').append("Username:"+result.username)
          $('#email').append("Email:<a href='#'>"+result.email+"</a>")
	$('#phone').append("Phone:<a href='#'>"+result.phone+"</a>")
	$('#website').append("Websiter:<a href='https://"+result.website+"'>"+result.website+"</a>")

         $('#address').append(result.address.suite+" "+result.address.street+", "+result.address.city+", "+result.address.zipcode)
    

          $('#companyName').append(result.company.name)
          $('#companybs').append(result.company.bs)
	$('#companyCatchPhrase').append("\""+result.company.catchPhrase+"\"")
});

    
   
$.getJSON("http://jsonplaceholder.typicode.com/posts?userId="+id, function (result) {
        $.each(result, function (i, field) {
            jsonObj.push(field);
            if(jsonObj.length == 3 ){
		posthtml = " <div class='row'><div class='col-sm-3 border ' ><label >"+jsonObj[0].title
                +"</label><p >"+jsonObj[0].body+" </p></div> <div class='col-sm-3 border' ><label >"+jsonObj[1].title
                +"</label><p >"+jsonObj[1].body+" </p></div> <div class='col-sm-3 border ' ><label >"+jsonObj[1].title
                +"</label><p >"+jsonObj[2].body+" </p></div> </div>";
                posts =  $('#posts');
                posts.append(posthtml );
                jsonObj = [];
	    
           }

        });
postData = " <div class='row'>"
 for (i = 0; i < jsonObj.length; i += 1) {
		posts =  $('#posts');
                postData += "<div class='col-sm-3 border' ><label >"
	                  +jsonObj[i].title+"</label><p >"+jsonObj[i].body+" </p></div>"
            
        }
          
 postData += "</div>"
posts.append(postData  );
});

   

    
   
    
});
