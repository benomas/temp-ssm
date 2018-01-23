import services from './services'
let general={
    login:(username,password)=>{
        services.post("oauth/token",{
            "client_id":"2",
            "client_secret":"devdevdevdevdevdevdevdevdevdevdevdevdevd",
            "grant_type":"password",
            "username":username,   
            "password":password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}
export default general;