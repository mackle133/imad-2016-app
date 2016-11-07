//counter code
var button =document.getElementById("Counter");
button.onclick=function(){
    var counter=0;
    //make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter=counter +1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};