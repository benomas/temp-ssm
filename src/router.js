import Vue from 'vue'
import VueRouter from 'vue-router'
import resources from 'resources'


Vue.use(VueRouter)

export default function(){
  this.permitionsObject = [];
  this.resources        = resources;
  this.load = (component)=>{
    // '@' is aliased to src/components
    return () => import(`@/${component}.vue`)
  };

  this.hasActionPermition = (resource,action)=>{
    if(typeof this.permitionsObject==="undefined")
      return true;

    if(typeof resource==="undefined" || typeof action==="undefined")
      return false;

    return typeof this.permitionsObject[resource]==="undefined" || typeof this.permitionsObject[resource][action]==="undefined" || this.permitionsObject[resource][action];
  };

  this.crudRoutes = (resource, excepts)=>{
    if(typeof resource==="undefined")
      return [];

    resource = this.resources[resource];

    if(typeof resource.actions==="undefined")
      return [];

    let defaults = [];
    let resourcePath="resources/";
    let actionKeys = Object.keys(resource.actions);
    for(let i=0;i<actionKeys.length;i++){
      let cActionKey=actionKeys[i];
      let cAction = resource.actions[cActionKey];
      if(this.hasActionPermition(resource.resource,cAction)){
        switch(cActionKey){
          case "index":
            defaults.push({
              path: cAction.path || resource.resource,
              component: this.load(resourcePath+resource.resource+'/'+ (cAction.component||'Index')),
              props: { resource, currentAction:cAction}
            });
            break;
          case "show":
            defaults.push({
              path: cAction.path || resource.resource+'/:id/show',
              component: this.load(resourcePath+resource.resource+'/'+ (cAction.component||'Show')),
              props: { resource, currentAction:cAction}
            });
            break;
          case "create":
            defaults.push({
              path: cAction.path || resource.resource+'/create',
              component: this.load(resourcePath+resource.resource+'/'+ (cAction.component||'Create')),
              props: { resource, currentAction:cAction}
            });
            break;
          case "edit":
            defaults.push({
              path: cAction.path || resource.resource+'/:id/edit',
              component: this.load(resourcePath+resource.resource+'/'+ (cAction.component||'Edit')),
              props: { resource, currentAction:cAction}
            });
            break;
          case "delete":
            defaults.push({
              path: cAction.path || resource.resource+'/:id/delete',
              component: this.load(resourcePath+resource.resource+'/'+ (cAction.component||'Delete')),
              props: { resource, currentAction:cAction}
            });
            break;
          default:defaults.push({
              path: cAction.path,
              component: this.load(resourcePath+resource.resource+'/'+ cAction.component),
              props: { resource, currentAction:cAction}
            });
        }
      }
    }
    return defaults;
  };

  this.loadresourcesRoutes = ()=>{
    let resourceRoutes = [];
    let resourceKeys = Object.keys(this.resources);
    for(let i=0;i<resourceKeys.length;i++){
      let currentResource = this.crudRoutes(resourceKeys[i]);
      resourceRoutes = resourceRoutes.concat(currentResource);
    }
    return resourceRoutes;
  };

  this.VueRouter =  new VueRouter({
    /*
     * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
     * it is only to be used only for websites.
     *
     * If you decide to go with "history" mode, please also open /config/index.js
     * and set "build.publicPath" to something other than an empty string.
     * Example: '/' instead of current ''
     *
     * If switching back to default "hash" mode, don't forget to set the
     * build publicPath back to '' so Cordova builds work again.
     */

    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { 
        path: '/',
        name: 'root',
        component: this.load('Skeleton'),
        children:this.loadresourcesRoutes(),
      },
      { path: '/hello', component: this.load('Hello') },
      { 
        path: '/login', 
        name: 'login',
        component: this.load('Login') 
      },
      { 
        path: '/logout', 
        name: 'logout',
        component: this.load('Login') 
      },

      // Always leave this last one
      { path: '*', component: this.load('Error404') } // Not found
    ]
  });

  this.linkServices=(servicesInstance)=>{
    this.VueRouter.servicesInstance = servicesInstance;
  };

  this.loadPassportRules = (servicesInstance)=>{

    if(typeof servicesInstance!=="undefined")
      this.linkServices(servicesInstance);
    if(typeof  this.VueRouter.servicesInstance==="undefined" || typeof this.VueRouter==="undefined")
      return false;

    this.VueRouter.beforeEach((to, from, next)=>{
      console.log(this.VueRouter.servicesInstance.authenticator.autenticated());
      if(this.VueRouter.servicesInstance.authenticator.autenticated()){
        if(to.path!=='/login')
          next();
        else
          next('/');
      }
      else{
        if(to.path!=='/login')
          next('/login');
        else
          next();
      }
    });

  };

};
