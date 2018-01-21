import services from './services'

let crudService=function(resourse){
  let newCrudService={};
  newCrudService[resourse]={
    show:(id,successCallBack,ErrorCallBack,params,url)=>{
        services.get(
            url || "api/"+resourse+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    },
    index:(successCallBack,ErrorCallBack,params,url)=>{
        services.get(
            url || "api/"+resourse,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    },
    store:(successCallBack,ErrorCallBack,params,url)=>{
        services.post(
            url || "api/"+resourse,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    },
    update:(id,successCallBack,ErrorCallBack,params,url)=>{
        services.put(
            url || "api/"+resourse+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    },
    delete:(id,successCallBack,ErrorCallBack,params,url)=>{
        services.delete(
            url || "api/"+resourse+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    }
  }
  return newCrudService[resourse];
}

export default crudService;