<template>
  <div>
  	{{currentAction.label}}
  	{{rows}}
  </div>
</template>

<script>
import indexComponent from '../crud/Index.vue';
export default {
  extends: indexComponent,
  data () {
    return {
    	rows:null
    }
  },
  mounted:function(){
	this.services.permission.index((response)=>{ this.rows = response.data });
  }
}
</script>

<style>
</style>
