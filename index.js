window.onload = function returnWord (event) { 
        

var userClick = document.getElementById("button"); 


userClick.addEventListener("click", function(event){

  event.preventDefault(); 
  
  var httpRequest = new XMLHttpRequest();

  var response; 
        httpRequest.onreadystatechange = function() {
                console.log(httpRequest);
        if(httpRequest.readyState==4 && httpRequest.status==200){       
          response= httpRequest.responseText;
          alert(stripHtmlTags(response)); 
        }
          }; 
   
  var val = document.getElementById("searchbar").value; 
  httpRequest.open("GET","request.php?q=definition",true);
  httpRequest.send(); 
 

}); 
 
 
 function stripHtmlTags(str){
  return str.replace(/<[^>]*>/g, '');
}
}
 
 

