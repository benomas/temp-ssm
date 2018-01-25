<template>
	<div class="row justify-center">
		<div class="create-container relative-position">
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
    storeSuccess:function(response){
      this.row=response.data;
      this.ready=true;
    },
    storeError:function(response){
      this.ready=true;
      if(this.serviceError(response))
          alert("error");
    },
    storeParams:function(){
      return null;
    },
    store:function(){
      this.services[this.resource].store(
          this.storeSuccess,
          this.storeError,
          this.storeParams()
      )
    }
  },
  mounted:function(){
		this.ready  =true;
  }
}
</script>

<style>
	.create-container{
		min-height:400px;
	}
</style>
