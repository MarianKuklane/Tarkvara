import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class lisauus 
{
	advertData = {};
	
	static inject() { return [Router]; }
	
	constructor(router) {
		this.router = router;
	}
 
  addAdvert(){
	  let client = new HttpClient();		  
	  	  
	  client.fetch('http://localhost:8080/advert/add', {
		  'method': "POST",
		  'body': json(this.advertData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log("Server saatis " + data.title);
      });
  
	  console.log("Method executed");
	  
	
	  var title = document.getElementById("title");
	  var email = document.getElementById("email");
	  var phone = document.getElementById("phone");
	  var price = document.getElementById("price");
	  var description = document.getElementById("description");
	  
	  if (title.value == ""  && email.value == ""  &&  phone.value == ""  &&  price.value ==""  &&  description.value =="")
		  {
		  	alert("Sisesta väljad!");
		  }
	  
	  if (title.empty  && email.empty  &&  phone.empty  &&  price.empty ==""  &&  description.empty =="")
	  {
	  	alert("Sisesta väljad!");
	  }

	if(title.value && email.value && phone.value && price.value && description.value)
		{
			document.location.href = "index"
		} 
/*	else 
	{
		alert("Sisesta kõik väljad!");
	}*/
	
	
  }
}