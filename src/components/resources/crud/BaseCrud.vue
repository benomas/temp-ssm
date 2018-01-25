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
