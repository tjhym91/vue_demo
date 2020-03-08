<template>
  <div id="app">
    <Add />
    <List :comments= "comments" :deletecomments = "deletecomments"/>
    
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
import Pubsub from 'pubsub-js'



export default {
  name: 'App',
  components: {
    Add, List
  },
  mounted() {
        console.log(Pubsub)
        Pubsub.subscribe("addcomments", (msg, comment)=>{
          this.addcomments(comment)}) 
       
   
                                                                  
  },
  data() {
    return {
      comments: [
        {
          name: "i", 
          content: "good"
        },
         {
          name: "h", 
          content: "very good"
        },
        {
          name: "s", 
          content: "very very good"
        }
      ]
    }
  },
 methods: {
   addcomments(comment){
       this.comments.unshift(comment)
   },
   deletecomments(index){
       this.comments.splice(index,1)
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
