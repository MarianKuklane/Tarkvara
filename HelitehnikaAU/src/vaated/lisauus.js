import {HttpClient, json} from 'aurelia-fetch-client'

export class index 
{
	advertData={}
	
  constructor()
  {

  }
  
  addAdvert(){
	  let client = new HttpClient();
	  
	  let advertData = {
			  
	  }
	  
	  client.fetch('http://localhost:9000/advert/add', {
		  'method': "POST",
		  'body': json(this.advertData)
	  })
	      .then(response => response.json())
	      .then(data => {
	      console.log(data.description);
      });
  
	  
	  
  }
}