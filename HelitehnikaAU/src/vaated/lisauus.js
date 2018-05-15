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
	 
	  addAdvert()
	  {
		  let client = new HttpClient();
	
		  var title = document.getElementById("title");
		  var email = document.getElementById("email");
		  var phone = document.getElementById("phone");
		  var price = document.getElementById("price");
		  var description = document.getElementById("description");
		  var category = document.getElementById("category");
		  var subcategory = document.getElementById("subcategory");

	  
		  if (title.value == ""  || email.value == ""  ||  phone.value == ""  ||  price.value ==""  ||  description.value =="" ||  category.value =="Vali" ||  subcategory.value =="Vali")
		  {
			  alert("Sisesta väljad!");
		  }
		  else
		  {		  		  	  
			  client.fetch('http://localhost:8080/advert/add', {
				  			'method': "POST",
				  			'body': json(this.advertData)
			  })
		      .then(response => response.json())
		      .then(data => {
		      console.log("Server saatis " + data.title);
		      	});
	  
		  		console.log("Method executed");
		  
		  		document.location.href = "index"
		  }
	  }
}