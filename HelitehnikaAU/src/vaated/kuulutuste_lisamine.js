import {HttpClient, json} from 'aurelia-fetch-client'

export class kuulutuse_lisamine

{
	advertList = []

	constructor() {
		
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/adverts')
			.then(response => response.json())
			.then(adverts => this.advertList = adverts);
		console.log("ACTIVATE");
	}
}