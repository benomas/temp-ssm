import services from './services'
let general={
    login:(user,password)=>{
        services.post("oauth/token",{
            "client_id":"2",
            "client_secret":"VO50RCnYqJUsUdGjRRc5oZwTVgvuCSRll4k5jeZh",
            "grant_type":"password",
            "username":user,   
            "password":password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}
export default general;