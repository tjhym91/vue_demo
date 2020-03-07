<template>
  <li class="hello">
    <div>
      <p> {{comment.name}}说：</p> 
        <p> {{comment.content}}</p> 
    </div>
    
  </li>
</template>

<script>

export default {
  name: 'Item',
  props: {
   comment: Object
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