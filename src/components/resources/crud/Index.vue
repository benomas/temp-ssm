<template>
	<div class="row justify-center">
		<div class="index-container relative-position">
			<q-transition
				appear
				enter="fadeIn"
				leave="fadeOut"
			>
			  <div v-show="ready">
			  	{{currentAction.label}}
			  	{{rows}}
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
    indexSuccess:function(response){
      this.rows=response.data;
      this.ready=true;
    },
    indexError:function(response){
      this.ready=true;
      alert("error");
    },
    indexParams:function(){
      return null;
    },
    index:function(){
      this.services[this.resource.resource].index(
          this.indexSuccess,
          this.indexError,
          this.indexParams()
      )
    }
  },
  mounted:function(){
		this.ready  =false;
  	this.index();
  }
}
</script>

<style>
	.index-container{
		min-height:400px;
	}
</style>
