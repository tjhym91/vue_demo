<template>
  <li class="hello">
    <div>
      <p> {{comment.name}}说：</p> 
        <p> {{comment.content}}</p> 
        <button @click = "deleteItem(index)">删除</button>
    </div>
    
  </li>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  name: 'Item',
  props: {
   comment: Object,
   index: Number,
  
  },
  data(){
      return {
          
      }
  },
  methods: {
      deleteItem(index){
            Pubsub.publish('deletecomments', index)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>