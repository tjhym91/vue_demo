<template>
  <div class="hello">
    <div class="user">
    <ul>
        <Item v-for = "(comment, index) in comments"  :key = "index" :comment = "comment" :index = "index" />
        
       
    </ul>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue"
export default {
  name: 'List',
  props: {
   comments: Array,
   
  },
  components: {
    Item
  },
  data(){
      return {
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
