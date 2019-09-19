
function foo() {

    if( typeof foo.counter == 'undefined' ) {
        foo.counter = 0;
    }
    foo.counter++;

   console.log( foo.counter);
}
function result() {

    if( typeof result.counter == 'undefined' ) {
        result.counter = 0;
    }
    result.counter++;
  
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

	
function fetchQuestion(){
 foo();
 q="question"+foo.counter;
 console.log(q);
 x=q;
 readTextFile("questions.json", function(text){
    var myObj = JSON.parse(text);
    if(!myObj[x]){
    	document.getElementById("result").innerHTML = "TEST COMPLETED!!";
    	if(result.counter){
    	
    	document.getElementById("outerDiv").innerHTML = "Right answers given : "+result.counter;
    	
    	}
    	else{
    	
    	document.getElementById("outerDiv").innerHTML = "Right answers given : 0";
    	
    	}
    }
    else{
    crctanswer=myObj[x].correctIndex;
    console.log(crctanswer);
    
    console.log(myObj[x].question);
    
    document.getElementById("queDiv").innerHTML =  myObj[x].question;
    document.getElementById("option1").innerHTML = myObj[x].answers[0];
    document.getElementById("option2").innerHTML = myObj[x].answers[1];
    document.getElementById("option3").innerHTML = myObj[x].answers[2];
    document.getElementById("option4").innerHTML = myObj[x].answers[3];
    var options=document.getElementsByName("question1");
	for (var i=0, len=options.length; i<len; i++) {
        if ( options[i].checked ) { // radio checked?
            val = options[i].id;
        	console.log(val);// if so, hold its value in val
            break; // and break out of for loop
        }
    }
	
    if(val==crctanswer){
    	//alert("right");
    	result();
    }
	}
    
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
	    else{
	    fetchQuestion();
	    
	    }
	  
	    return formValid;
	}
	
	

	
