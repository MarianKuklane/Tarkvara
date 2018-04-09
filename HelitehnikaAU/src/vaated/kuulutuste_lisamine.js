import {HttpClient, json} from 'aurelia-fetch-client'

export class kuulutuse_lisamine

{
	advertList = []
	advertId = advertData.id;

	constructor() {
		
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts')
			.then(response => response.json())
			.then(adverts => this.advertList = adverts);
		console.log("ACTIVATE");
	}
	
	getAdvertById(){
		  let client = new HttpClient();		  
		  	  
		  client.fetch('http://localhost:8080/advert/$advertId', {
			  'method': "GET",
			  'body': json(this.advertData.id)
		  })
		      .then(response => response.json())
		      .then(data => {
		      console.log("Server saatis ");
	      });
	  
		  console.log("Method getAdvertById executed");
		  
	  }
}