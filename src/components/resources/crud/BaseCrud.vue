<script>
  import {
    QTransition,
    QInnerLoading,
    QSpinnerGears,
  } from 'quasar'

  export default{
    components: {
      QTransition,
      QInnerLoading,
      QSpinnerGears,
    },
    data:function(){
        return {
            row:null,
            rows:null,
            ready:false,
        }
    },
    methods:{
      dinamicService:function(){
        if(typeof this.resource ==="undefined")
          return false;
        if(typeof this.services[this.resource.resource] === "undefined")
          this.services.pushStaticCrudServices(this.resource.resource);
      },
      serviceError(response){
      	if(typeof response==="undefined")
      		return false;
	    return typeof response.response==="undefined" || typeof response.response.status==="undefined" || response.response.status!==401;
      }
    },
    props:[
      "resource",
      "currentAction"
    ],
    created:function(){
      this.dinamicService();
    }
  }
</script>
