<template>
  <div id="app">
   <div>
     <router-link to='/about'>About</router-link>
     <router-link to='/home'>Home</router-link>
   </div>

   <div>
     <router-view></router-view>
   </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      repoUrl: '',
      repoName: '',
      searchRepo: '',
      show: false,
      
    }
  },

  mounted() {
                                                       
  },
 methods: {
  
 }
}
</script>

<style>
   .router-link-active{
     color: red
   }
</style>
