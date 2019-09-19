 fetch("person.json")
.then(response => response.json())
.then(json =>{
	append(json);
	
});

 function append(data){
	 console.log(data.person[1].job);
	 document.getElementById("demo").innerHTML=data.person[1].job;
 }