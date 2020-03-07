<template>
  <div class="hello">
    <div class="user">
    <ul>
        <Item v-for = "(comment, index) in comments"  :key = "index" :comment = "comment" :index = "index" :deletecomments = "deletecomments"/>
        
       
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
   deletecomments: Function
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
