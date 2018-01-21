<template>
  <div>
  	{{currentAction.label}}
  </div>
</template>

<script>
import createComponent from '../crud/Create.vue';
export default {
  extends: createComponent,
  data () {
    return {}
  }
}
</script>

<style>
</style>
