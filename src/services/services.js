import authenticator from '../authenticator/passport'
import crudService from './crudService'

export default function(router){
  var axios = require('axios');
  this.defaultConfig = {
    baseURL            : 'http://localhost/solar-api/public',
    headers            : {
      'X-Requested-With'           : 'XMLHttpRequest',
      'Content-Type'               : 'application/json'
    },
    timeout            : 15000,
    responseType       : 'json',
    maxContentLength   : 20000,
    callBackRedirector:null
  };
  this.router = router;
  this.axios = axios.create(this.defaultConfig);
  this.authenticator = new authenticator();

  this.axios.interceptors.request.use((config)=>{
    if(this.authenticator.autenticated())
     config.headers = this.authenticator.injectHeaders(config.headers);
    return config;
  },(error)=> {
    return Promise.reject(error);
  });

  this.axios.interceptors.response.use((response)=>{
      this.authenticator.reactToResponse(response);
      return response;
  },(error)=>{
    this.authenticator.reactToResponse(error);
    switch(error.response.status){
      case 401:
        this.router.push({name:'login'});
        break;
      case 409:
        location.reload(); 
        break;
      default:return Promise.reject(error);
    }
  });

  this.pushStaticCrudServices=(resource)=>{
    if(typeof resource==="undefined")
      return false;
    this[resource] = new crudService(this,resource);
  };

  this.pushDinamicCrudServices=(resource)=>{
    if(typeof resource==="undefined")
      return false;
    this[resource.resource] = resource;
  };

};