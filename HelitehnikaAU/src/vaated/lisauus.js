import {HttpClient, json} from 'aurelia-fetch-client'

export class lisauus 
{
	advertData={}
	
  constructor()
  {

  }
  
  addAdvert(){
	  let client = new HttpClient();		  
	  	  
	  client.fetch('http://localhost:9000/advert/add', {
		  'method': "POST",
		  'body': json(this.advertData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log("Server saatis " + data.title);
      });
  
	  console.log("Method executed");
	  
  }
}