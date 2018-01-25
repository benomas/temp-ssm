export default function(services,resource){
  this.services =services;
  this.resource = resource;
  this.show=(id,successCallBack,ErrorCallBack,params,url)=>{
        this.services.axios.get(
            url || "api/"+this.resource+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    };

    this.index=(successCallBack,ErrorCallBack,params,url)=>{
        this.services.axios.get(
            url || "api/"+this.resource,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    };

    this.store=(successCallBack,ErrorCallBack,params,url)=>{
        this.services.axios.post(
            url || "api/"+this.resource,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    };

    this.update=(id,successCallBack,ErrorCallBack,params,url)=>{
        this.services.axios.put(
            url || "api/"+this.resource+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    };

    this.delete=(id,successCallBack,ErrorCallBack,params,url)=>{
        this.services.axios.delete(
            url || "api/"+this.resource+"/"+id,
            params|| {}
        ).then(function (response) {
            if(typeof successCallBack ==="function")
                successCallBack(response);
        }).catch(function (error) {
            if(typeof ErrorCallBack ==="function")
                ErrorCallBack(error);
        });
    }
};