import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

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
      config.options.pushState = true;
      config.options.root = '/';
      
      config.map([ 
    	   { route: ['', 'index'], name: 'pealeht', moduleId: PLATFORM.moduleName('vaated/index'), nav: true, title:"Pealeht"},
    	   { route: 'regaette', name: 'ettevõtte_registreerimine', moduleId: PLATFORM.moduleName('vaated/ettevõtte_registreerimine'), nav: true, title: 'Registeeru'},
    	   { route: 'regakas', name: 'kasutajaks_registreerimine', moduleId: PLATFORM.moduleName('vaated/kasutajaks_registreerimine'), nav: true},
           { route: 'lisa', name: 'lisauus', moduleId: PLATFORM.moduleName('vaated/lisauus'), nav: true, title: 'Lisa'},
           { route: 'kuulutustelis/:subcategory', name: 'kuulutuste_lisamine', moduleId: PLATFORM.moduleName('vaated/kuulutuste_lisamine'), title: 'Kuulutuse_lisamine'},
           { route: 'logisisse', name: 'logi_sisse', moduleId: PLATFORM.moduleName('vaated/logisisse'), title: 'Logi_sisse', nav: true},
           { route: 'detail', name: 'detail_vaade', moduleId: PLATFORM.moduleName('vaated/detail_vaade'), title: 'detail_vaade', nav: true},
        ]);
      
      config.mapUnknownRoutes('not-found');
  } 
  
}
