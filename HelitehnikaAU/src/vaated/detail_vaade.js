export class ettevõtte_registreerimine
{
	constructor(router) 
	{
		this.router = router;
	}
	
	activate(params, routeConfig){
		this.routConfig = routeConfig;
		console.log(params);
		var id=params.id;
		console.log("id");		
	}
}