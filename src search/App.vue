<template>
  <div id="app">
   <input type="text" v-model = "searchRepo" @keyup.enter = "searchRe">
   <div v-show='show'>Loading...</div>
   <div v-if="repoUrl"><a :href = "repoUrl">{{repoName}}</a></div> 
  </div>
</template>

<script>
import axios from 'axios'
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
   searchRe(){
     const url = 'https://api.github.com/search/repositories?q='+this.searchRepo+'&sort=stars'      
     axios.get(url).then(res=>
       {
         
         this.repoUrl = res.data.items[0].html_url
         this.repoName = res.data.items[0].name
         this.searchRepo = ''
         this.show = false
       }).catch(err=>{
         console.log(err)
         alert('error!')
       })
     this.show = true
   }
 }
}
</script>

<style>

</style>
