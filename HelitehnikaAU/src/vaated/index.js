import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class index 
{
	static inject() { return [Router]; }
	
	
  constructor(router)
  {
	  this.router = router; 
  }
  
  advertsView(subcategory){
      //window.alert(subcategory);
      this.router.navigate(`kuulutustelis` +'/'+ subcategory);
  }

  }
 
  
