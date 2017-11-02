// window.onload = function returnWord (event) { 
        

// var userClick = document.getElementById("button"); 


// userClick.addEventListener("click", function(event){

//   event.preventDefault(); 
  
//   var httpRequest = new XMLHttpRequest();

//   var response; 
//         httpRequest.onreadystatechange = function() {
//                 console.log(httpRequest);
//         if(httpRequest.readyState==4 && httpRequest.status==200){       
//           response= httpRequest.responseText;
//           var doc = document.getElementById("result");  
//           doc.innerHTML=response; 
//         }
//           }; 
   
//   var val = document.getElementById("searchbar").value; 
//   httpRequest.open("GET","request.php?q="+val,true);
//   httpRequest.send(); 
 

// }); 
 
 
 
// }

window.onload= function returnXML(event){ 
  
  var gtAUC=document.getElementById('getall'); 
  
  gtAUC.addEventListener("click", function (event){ 
    
    event.preventDefault(); 
    
    var http = new XMLHttpRequest(); 
    
    var url= "request.php?q=";  
    var response;  
    var condition= "&all=true"
    
    http.onreadystatechange= returnXML; 
    
    http.open('GET', url+condition); 
    http.send(); 
    
    function returnXML(){ 
      if(http.readyState==4  && http.status==200){
        response = http.responseXML; 
        var returnrez = document.getElementById('result');  
        var definition = response.getElementsByTagName('definition'); 
        var list = document.createElement('ol'); 
        
        returnrez.appendChild(list); 
        for(var d = 0; d<definition.length; d++){ 
          var define = document.createElement('li'); 
          var text = document.createTextNode(definition[d].children[0].childNodes[0].nodeValue); 
          define.appendChild(text); 
          list.appendChild(define); 
          
        }
      }else{ 
        alert("Error, request cannot be completed."); 
    }
    
    }  
    
    
    
  });
  
  
}