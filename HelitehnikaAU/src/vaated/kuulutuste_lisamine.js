import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class kuulutuse_lisamine

{
	static inject() { return [Router]; }
	
	advertId = {}
	advertList = []
	searchStr = ""
		

	constructor(router) {
		this.router = router;
	}

	activate(params, routerCongif) {
		
		console.log(params);		
		
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts/' + params.subcategory)
			.then(response => response.json())
			.then(adverts => this.advertList = adverts);		
		
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