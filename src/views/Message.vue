<template>
  <div>
    <ul>
        <li v-for = "message in messages" :key="message.id">
           <router-link :to= "'/home/message/details/'+message.id">{{message.title}}</router-link> 
        </li>
    </ul>
    
    <router-view></router-view>
  
  </div>
</template>

<script>

export default {
  name: 'Message',
  components: {
    
  },
  data() {
    return {
      messages: []
      
    }
  },

  mounted() {
                 setTimeout(()=>{
                   const messages = [
                       {
                           id : 1,
                           title : 'message1'
                       },
                        {
                           id : 2,
                           title : 'message2'
                       }
                   ]
                   this.messages = messages
                 },1000)                                      
  },
 methods: {
 }
}
</script>

<style>

</style>