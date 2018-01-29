function answer(){
	if (document.getElementById("yesno").checked)
	{
		document.getElementById("input").style.visibility = 'visible';
	}
	else
	{ 
		document.getElementById("input").style.visibility = 'hidden';
	}
}

function Validate(){
	if(document.myForm.Name.value==""){
		alert("Please provide your name!");
		document.myForm.Name.focus();
		return false;
	}

	if(document.myForm.LName.value==""){
		alert("Please provide your last name!");
		document.myForm.Name.focus();
		return false;
	}
		
	if(document.myForm.EMail.value==""){
		alert("Please provide your email id!");
		document.myForm.EMail.focus();
		return false;
	}
            
	var emailSyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(document.myForm.EMail.value.match(emailSyntax))  {  
		window.open("../html/successfully_submitted.html");
        }  
    else  
        {  
        alert("You have entered an invalid email address!");  
		document.myForm.EMail.focus();  
        return false;  
		}  
} 
			
		
	

