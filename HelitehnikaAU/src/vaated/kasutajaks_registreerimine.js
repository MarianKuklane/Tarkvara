import {HttpClient, json} from 'aurelia-fetch-client'

export class kasutajaks_registreerimine 
{
   userData={}
	
  constructor()
  {

  }
  
  addUser(){
	  let client = new HttpClient();	
	  	  
	  client.fetch('http://localhost:8080/user/add', {
		  'method': "POST",
		  'body': json(this.userData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log("Server saatis " + data.firstName);
      });
  
	
  }
  }
