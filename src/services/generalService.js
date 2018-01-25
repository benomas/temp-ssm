export default function(services){
    this.services =  services;
    this.resource = "general";
    this.login=(username,password)=>{
        this.services.axios.post("oauth/token",{
            "client_id":"2",
            "client_secret":"devdevdevdevdevdevdevdevdevdevdevdevdevd",
            "grant_type":"password",
            "username":username,   
            "password":password
        }).then( (response)=>{
            this.services.router.VueRouter.push('/');
            console.log(response);
        }).catch( (error)=>{
            console.log(error);
        });
    }
};