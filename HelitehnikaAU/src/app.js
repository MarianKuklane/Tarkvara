export class App
{
  constructor() 
  {
	    this.message = 'Katsetan veel kord!';
  }
  
  configureRouter(config, router) 
  {
      this.router = router; 
      config.title = 'Helitehnika'; 
      
      config.map([ 
    	   { route: ['', 'index'], name: 'pealeht', moduleId: 'vaated/index', nav: true, title:"Pealeht"},
    	   { route: 'regaette', name: 'ettevõtte_registreerimine', moduleId: 'vaated/ettevõtte_registreerimine', nav: true, title: 'Registeeru'},
    	   { route: 'regakas', name: 'kasutajaks_registreerimine', moduleId: 'vaated/kasutajaks_registreerimine', nav: true},
           { route: 'lisa', name: 'lisauus', moduleId: 'vaated/lisauus', nav: true, title: 'Lisa'},
           { route: 'kuulutustelis', name: 'kuulutuste_lisamine', moduleId: 'vaated/kuulutuste_lisamine', title: 'Kuulutuse_lisamine', nav: true},
         
        ]);
  } 
  
}
