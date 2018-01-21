import authenticator from '../authenticator/passport'
var axios = require('axios');
var defaultConfig={
  baseURL            : 'http://dev.josema-v2:705/',
  headers            : {
    'X-Requested-With'           : 'XMLHttpRequest',
    'Content-Type'               : 'application/json',
  },
  timeout            : 15000,
  responseType       : 'json',
  maxContentLength   : 20000,
  callBackRedirector:null
};
let passportService=function(){
  let newAxios = axios.create(defaultConfig);

  newAxios.interceptors.request.use(function (config) {
    if(authenticator.autenticated())
     config.headers = authenticator.injectHeaders(config.headers);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  newAxios.interceptors.response.use(function (response) {
      authenticator.reactToResponse(response);
      return response;
  }, function (error) {
    authenticator.reactToResponse(error);
    return Promise.reject(error);
    switch(error.response.status){
      case 401:
        window.location="/";
        break;
      case 409:
        location.reload(); 
        break;
      default:return Promise.reject(error);
    }
  });
  return newAxios;
};
export default new passportService();