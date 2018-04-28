import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class ettevõtte_registreerimine
{
	static inject() { return [Router]; }
	
	constructor(router) {
		this.router = router;
	}
}