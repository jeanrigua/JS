function convert(){
    event.preventDefault();
    var total=document.getElementById("cad").value*0.75;
    document.getElementById("output").innerHTML = ("The exchange rate in US Dollar is: $" +total) ;
}

function openWin(){
	window.open("/homework/html/successfully_submitted.html");
}

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

function mul(){
firstnumber = document.getElementById("numone").value;
secondnum = document.getElementById("numtwo").value;
document.getElementById("result").innerHTML = firstnumber*secondnum;
}

function divide(){
firstnumber = document.getElementById("numone").value;
secondnum = document.getElementById("numtwo").value;
document.getElementById("result").innerHTML = firstnumber/secondnum;
}