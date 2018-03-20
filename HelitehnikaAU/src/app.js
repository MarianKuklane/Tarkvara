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
           { route: 'remote', name: 'remote', moduleId: 'vaated/remote', title: 'Remote', nav: true},
           { route: 'speakers', name: 'speakers_view', moduleId: 'vaated/speakers_view', title: 'Speakers', nav: true},
           { route: 'subwoofer', name: 'subwoofer', moduleId: 'vaated/subwoofer', title: 'Subwoofer', nav: true},
           { route: 'loudspeakers', name: 'loudspeakers', moduleId: 'vaated/loudspeakers', title: 'LoudSpeakers', nav: true},
           { route: 'headphones', name: 'headphones', moduleId: 'vaated/headphones', title: 'Speakers', nav: true},
           { route: 'docs', name: 'docs', moduleId: 'vaated/docs', title: 'Docs', nav: true}
        ]);
  } 
  
}
