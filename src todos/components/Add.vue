<template>
  <div class="hello">
    <div class="user">
    <p>用户名：</p>
    <input type="text" v-model = "name">
    <p>评论：</p>
    <textarea name="" id="" cols="30" rows="10" v-model = "content"></textarea>
    </div>
    <button @click = "add">提交</button>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  name: 'Add',
  props: {
   

  },
  data(){
    return{
      name: "",
      content: ""

    }
  },
  methods: {
    add(){
      const name = this.name;
      const content = this.content;
      const comment = {name, content};
     
      Pubsub.publish("addcomments", comment)

  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
