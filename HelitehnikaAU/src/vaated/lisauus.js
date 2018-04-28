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
	  
  }
}