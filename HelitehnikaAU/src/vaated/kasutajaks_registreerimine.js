import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class kasutajaks_registreerimine 
{
   userData={}
	
	static inject() { return [Router]; }
	
	constructor(router) {
		this.router = router;
	}
  
  addUser()
  {
	  let client = new HttpClient();	
	  	  
	  client.fetch('http://localhost:8080/user/add', {
		  'method': "POST",
		  'body': json(this.userData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log("Server saatis " + data.firstName);
      });
  
	  var firstname = document.getElementById("firstname");
	  var lastname = document.getElementById("lastname");
	  var phone = document.getElementById("phone");
	  var username = document.getElementById("username");
	  var email = document.getElementById("email");
	  var password = document.getElementById("password");
	  if (firstname.value == ""  &&  lastname.value == ""  &&  username.value ==""  &&  email.value =="" && password.value=="")
		  {
		  	alert("Sisesta väljad!");
		  }
	  
	
	  
	  if (firstname.value && lastname.value  &&  username.value   &&  email.value && password.value)
	  {
		  document.location.href = "index"
	  }
	 /* else 
		{
			alert("Sisesta kõik väljad!");
		}*/
  }
}
