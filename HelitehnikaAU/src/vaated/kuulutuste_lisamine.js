import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from aurelia 'aurelie-framework'
import {router} from aurelia 'aurelie-router'

//@inject(Router)
export class kuulutuse_lisamine

{
	static inject(){
		return [router];
	}
	
	advertList = []	

	constructor(router) {
		this.router = router;
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts')
			.then(response => response.json())
			.then(adverts => this.advertList = adverts);
		console.log("ACTIVATE");
	}
	
	detail(id){
		this.router.navigate('detail' +'/'+ id);
		console.log("Id kätte saadud");
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