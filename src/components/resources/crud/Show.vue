<script>
import baseCrud from './BaseCrud.vue';
export default {
  extends: baseCrud,
  data () {
    return {}
  },
  props:[
    "resource",
    "currentAction"
  ],
}
</script>

<style>
</style>
