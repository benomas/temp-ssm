<template>
	<div class="row justify-center">
		<div class="delete-container relative-position">
			<q-transition
				appear
				enter="fadeIn"
				leave="fadeOut"
			>
			  <div v-show="ready">
			  	{{currentAction.label}}
			  	{{row}}
			  </div>
			</q-transition>
			<q-inner-loading v-bind:visible="!ready">
				<q-spinner-gears size="50px" color="primary"></q-spinner-gears>
			</q-inner-loading>
		</div>
	</div>
</template>
<script>
import baseCrud from './BaseCrud.vue';
export default {
  extends: baseCrud,
  data () {
    return {
    	rows:null
    }
  },
  props:[
    "resource",
    "currentAction"
  ],
	methods:{
    deleteSuccess:function(response){
      this.row=null;
      this.ready=true;
    },
    deleteError:function(response){
      this.ready=true;
      if(this.serviceError(response))
          alert("error");
    },
    deleteParams:function(){
      return null;
    },
    delete:function(){
      this.services[this.resource].delete(
          this.deleteSuccess,
          this.deleteError,
          this.deleteParams()
      )
    }
  },
  mounted:function(){
		this.ready  =true;
  }
}
</script>

<style>
	.delete-container{
		min-height:400px;
	}
</style>