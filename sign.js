 function validation(){
    var form = document.getElementById("form");
    var mail = document.getElementById("Email").value;
    var message = document.getElementById("notMail");
    var logo =document.getElementById("errorMail");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var input = document.getElementById("Email");
    

    if (mail.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        logo.innerHTML = '<span id="errorMail"></span>';
        input.style.border = "";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        message.innerHTML = "Looks like this is not an email";
        logo.innerHTML = "<img src='icon-error.svg'>";
        input.style.border = "2px solid hsl(0, 100%, 74%)";
        
        
    }
    if (mail == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        logo.innerHTML = '<span id="errorMail"></span>';
        input.style.border = "";
    }
}

function empty(){
    var form = document.getElementById("form");
    var name = document.getElementById("First").value;
    var message = document.getElementById("notFirst");
    var logo =document.getElementById("errorFirst");
    var input = document.getElementById("First");  
    

  if(name == "" || name ==" ") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            message.innerHTML = "First name cannot be empty";
            logo.innerHTML = "<img src='icon-error.svg'>";
            input.style.border = "2px solid hsl(0, 100%, 74%)";
            
        }
    else {
            form.classList.add("valid");
            form.classList.remove("invalid");
            message.innerHTML = "";
            logo.innerHTML = '<span id="errorFirst"></span>';
            input.style.border = "";
        }
    
    
   
} 

function emptyLast(){
    var form = document.getElementById("form");
    var name = document.getElementById("Last").value;
    var message = document.getElementById("notLast");
    var logo =document.getElementById("errorLast");
    var input = document.getElementById("Last");  
    

  if(name == "" || name ==" ") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            message.innerHTML = "Last name cannot be empty";
            logo.innerHTML = "<img src='icon-error.svg'>";
            input.style.border = "2px solid hsl(0, 100%, 74%)";
            
        }
    else {
            form.classList.add("valid");
            form.classList.remove("invalid");
            message.innerHTML = "";
            logo.innerHTML = '<span id="errorLast"></span>';
            input.style.border = "";

        }
    
    
   
} 

function Ps(){
    var form = document.getElementById("form");
    var name = document.getElementById("Password").value;
    var message = document.getElementById("notPs");
    var logo =document.getElementById("errorPs");
    var input = document.getElementById("Password");  
    

  if(name == "" || name ==" ") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            message.innerHTML = "Password cannot be empty";
            logo.innerHTML = "<img src='icon-error.svg'>";
            input.style.border = "2px solid hsl(0, 100%, 74%)";
            
        }
    else {
            form.classList.add("valid");
            form.classList.remove("invalid");
            message.innerHTML = "";
            logo.innerHTML = '<span id="errorPs"></span>';
            input.style.border = "";
        }
    
    
   
} 



