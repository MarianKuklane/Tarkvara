import {HttpClient, json} from 'aurelia-fetch-client'

export class kasutajaks_registreerimine 
{
	//userData={}
	
  constructor()
  {

  }
  
  addUser(){
	  let client = new HttpClient();		  
	  
	  let userData = {
			  "firstName" : "Myname"
	  }
	  	  
	  client.fetch('http://localhost:8080/user/add', {
		  'method': "POST",
		  'body': json(userData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log("Server saatis " + data.firstName);
      });
  
	  console.log("Method executed");
	  
  }
}