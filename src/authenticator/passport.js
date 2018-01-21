var autenticator = function(){
  this.accessToken  = JSON.parse(localStorage.getItem("accessToken") || 'null');
  this.refreshToken = JSON.parse(localStorage.getItem("refreshToken") || 'null');
  this.setAccessToken = function(accessToken){
    this.accessToken = typeof accessToken!=="undefined"?"Bearer "+accessToken:null;
    localStorage.setItem("accessToken", JSON.stringify(this.accessToken));
  }
  this.setRefreshToken=function(refreshToken){
    this.refreshToken=typeof refreshToken!=="undefined"?"Bearer "+refreshToken:null;
    localStorage.setItem("refreshToken", JSON.stringify(this.refreshToken));
  }
  this.autenticated=function(){
    return this.accessToken!==null;
  }
  this.injectHeaders=function(headers){
    headers["Authorization"]=this.accessToken;
    return headers;
  }
  this.reactToResponse=function(response){
    if(typeof response!=="undefined" && typeof response.data!=="undefined" && typeof response.data.token_type!=="undefined" && response.data.token_type==="Bearer"){
      if(response.data.access_token!=="undefined")
        this.setAccessToken(response.data.access_token)
      else
        this.setAccessToken(null)
      if(response.data.refresh_token!=="undefined")
        this.setRefreshToken(response.data.refresh_token)
      else
        this.setRefreshToken(null)
    }
  }
}
export default new autenticator();
