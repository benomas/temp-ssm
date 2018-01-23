import Vue from 'vue'
import VueRouter from 'vue-router'
import resources from 'resources'

Vue.use(VueRouter)
var permitionsObject=[];

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

function hasActionPermition(permitionsObject,resource,action){
  if(typeof permitionsObject==="undefined")
    return true;

  if(typeof resource==="undefined" || typeof action==="undefined")
    return false;

  return typeof permitionsObject[resource]==="undefined" || typeof permitionsObject[resource][action]==="undefined" || permitionsObject[resource][action];
}

function crudRoutes(resource, excepts){
  let defaults = [];
  let resourcePath="resources/";
  if(typeof resource==="undefined" || typeof resource.actions==="undefined")
    return [];
  let actionKeys = Object.keys(resource.actions);
  for(let i=0;i<actionKeys.length;i++){
    let cActionKey=actionKeys[i];
    let cAction = resource.actions[cActionKey];
    if(hasActionPermition(permitionsObject,resource.resource,cAction)){
      switch(cActionKey){
        case "index":
          defaults.push({
            path: cAction.path || resource.resource,
            component: load(resourcePath+resource.resource+'/'+ (cAction.component||'Index')),
            props: { resource, currentAction:cAction}
          });
          break;
        case "show":
          defaults.push({
            path: cAction.path || resource.resource+'/:id/show',
            component: load(resourcePath+resource.resource+'/'+ (cAction.component||'Show')),
            props: { resource, currentAction:cAction}
          });
          break;
        case "create":
          defaults.push({
            path: cAction.path || resource.resource+'/create',
            component: load(resourcePath+resource.resource+'/'+ (cAction.component||'Create')),
            props: { resource, currentAction:cAction}
          });
          break;
        case "edit":
          defaults.push({
            path: cAction.path || resource.resource+'/:id/edit',
            component: load(resourcePath+resource.resource+'/'+ (cAction.component||'Edit')),
            props: { resource, currentAction:cAction}
          });
          break;
        case "delete":
          defaults.push({
            path: cAction.path || resource.resource+'/:id/delete',
            component: load(resourcePath+resource.resource+'/'+ (cAction.component||'Delete')),
            props: { resource, currentAction:cAction}
          });
          break;
        default:defaults.push({
            path: cAction.path,
            component: load(resourcePath+resource.resource+'/'+ cAction.component),
            props: { resource, currentAction:cAction}
          });
      }
    }
  }
  return defaults;
}

function loadResoursesRoutes(){
  let resourceRoutes = [];
  let resourceKeys = Object.keys(resources);
  for(let i=0;i<resourceKeys.length;i++){
    let currentResource = crudRoutes(resources[resourceKeys[i]]);
    resourceRoutes = resourceRoutes.concat(currentResource);
  }
  return resourceRoutes;
}

export default new VueRouter({
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
      component: load('Skeleton'),
      children:loadResoursesRoutes(),
    },
    { path: '/hello', component: load('Hello') },
    { path: '/login', component: load('Login') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
