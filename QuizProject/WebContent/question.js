var xmlhttp = new XMLHttpRequest();
myObj="";
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
  }
};
function foo() {

    if( typeof foo.counter == 'undefined' ) {
        foo.counter = 2;
    }
    foo.counter++;
   // document.write(foo.counter+"<br />");
   console.log( foo.counter);
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
	
function fetchQuestion(q){
 
 
 x=q;
 readTextFile("questions.json", function(text){
     myObj = JSON.parse(text);
    
    crctanswer=myObj[x].correctIndex;
    
    console.log(myObj[x].question);
    
    document.getElementById("queDiv").innerHTML =  myObj[x].question;
    document.getElementById("option1").innerHTML = myObj[x].answers[0];
    document.getElementById("option2").innerHTML = myObj[x].answers[1];
    document.getElementById("option3").innerHTML = myObj[x].answers[2];
    document.getElementById("option4").innerHTML = myObj[x].answers[3];
    
});
}
 


function validateForm() {
	    var radios = document.getElementsByName("question1");
	    var formValid = false;

	    var i = 0;
	    while (!formValid && i < radios.length) {
	        if (radios[i].checked) {formValid = true;
	        break;
	        }
	        i++;        
	    }

	    if (!formValid) alert("Must check some option!");
	    
	    return formValid;
	    
	}
	function answerselected()
	{
	var options=document.getElementsByName("question1");
	for (var i=0, len=options.length; i<len; i++) {
        if ( options[i].checked ) { // radio checked?
            val = options[i].id; // if so, hold its value in val
            //alert(val);
           // alert(crctanswer);
            
            break; // and break out of for loop
        }
    }
    if(val==crctanswer){
    	//alert("right");
    	return 1;
    }
    else{
    	//alert("wrong");
    	return 0;
    }
	
	}
	function setcookie(q)  
	{  
		//alert("set");
	    var info=answerselected();
	   // alert(info);
	    if(!document.cookie)
	        document.cookie = 0;
	    else
	    
	    document.cookie=q+"="+info;  
	}  

	function getCookie(cname) {
		  var name = cname + "=";
		  var decodedCookie = decodeURIComponent(document.cookie);
		  var ca = decodedCookie.split(';');
		  for(var i = 0; i < ca.length; i++) {
		    var c = ca[i];
		    while (c.charAt(0) == ' ') {
		      c = c.substring(1);
		    }
		    if (c.indexOf(name) == 0) {
		      return c.substring(name.length, c.length);
		    }
		  }
		  		  return "";
		}

	
	function result()
	{	score=0;
		for (var x in  myObj){
			console.log( getCookie(x));
			score+=parseInt(getCookie(x));
		}
		var para=document.createElement("h3");
		para.innerText = "YOUR SCORE IS  "+score;               // Insert text
		document.body.appendChild(para);   
	}
	                   // Append <p> to <body>


	
xmlhttp.open("GET", "questions.json", true);
xmlhttp.send();