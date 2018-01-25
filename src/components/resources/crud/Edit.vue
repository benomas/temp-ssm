<template>
	<div class="row justify-center">
		<div class="edit-container relative-position">
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
    showSuccess:function(response){
      this.row=response.data;
      this.ready=true;
    },
    showError:function(response){
      this.ready=true;
      alert("error");
    },
    showParams:function(){
      return null;
    },
    show:function(){
      this.services[this.resource].store(
          this.storeSuccess,
          this.storeError,
          this.storeParams()
      )
    },
    updateSuccess:function(response){
      this.row=response.data;
      this.ready=true;
    },
    updateError:function(response){
      this.ready=true;
      alert("error");
    },
    updateParams:function(){
      return null;
    },
    update:function(){
      this.services[this.resource].store(
          this.storeSuccess,
          this.storeError,
          this.storeParams()
      )
    }
  },
  mounted:function(){
		this.ready  =false;
  	this.show();
  }
}
</script>

<style>
	.edit-container{
		min-height:400px;
	}
</style>