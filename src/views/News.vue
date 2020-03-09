<template>
 
    <ul>
        <li v-for = "(news, index) in newsArr" :key="index">
            {{news}}
        </li>
    </ul>
 
</template>

<script>

export default {
  name: 'News',
  components: {
    
  },
  data() {
    return {
      newsArr: ['news1','news2']
      
    }
  },

  mounted() {
                                                       
  },
 methods: {
 }
}
</script>

<style>

</style>