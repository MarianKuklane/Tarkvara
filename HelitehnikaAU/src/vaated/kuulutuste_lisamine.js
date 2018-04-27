import {HttpClient, json} from 'aurelia-fetch-client'

export class kuulutuse_lisamine

{
	advertList = []
	advertId = {}
	advertList = []
	searchStr = ""


	constructor() {
		
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts')
			.then(response => response.json())
			.then(adverts => this.advertList = adverts);
		console.log("ACTIVATE");
		console.log(this.searchStr);
	}
	
	searchUser() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts/search/' + this.searchStr)
			.then(response => response.json())
			.then(users => this.advertList = adverts);
	}
	
	getAdvertById(){
		  let client = new HttpClient();		  
		  	  
		  client.fetch('http://localhost:8080/advert/', {
			  'method': "GET",
			  'body': json(this.advertData)
		  })
		      .then(response => response.json())
		      .then(data => {
		      console.log("Server saatis ");
	      });
	  
		  console.log("Method getAdvertById executed");
		  
	  }
}