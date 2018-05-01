import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class ettevõtte_registreerimine
{
	static inject() { return [Router]; }
	
	advertData = {};
	
	constructor(router) {
		this.router = router;
	}
	
	
	activate(params, routerCongif) {
		
			console.log(params);		
		
			let client = new HttpClient();

			client.fetch('http://localhost:8080/advert/' + params.id)
				.then(response => response.json())
				.then(advert => this.advertData = advert);	
		
			console.log(this.advertData);
		
	}	
	
}
	
