<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';
import axios from 'axios';
import {store} from './components/data/store'
import SearchBar from './components/partials/SearchBar.vue';


export default {
  components:{
    Main,
    Header,
    SearchBar

  },
  data(){
    return{
      store
      
    }
  },
  methods:{
    getApi(){
      
      axios.get(this.store.apiUrl, {
        params:store.cardParams
      })
      .then(res=>{
        this.store.cardsList= res.data.results
        console.log(this.store.cardsList)
        
        
        
        

      })
      .catch(error=> {
        console.log(error)
      })
     


    }  
  },
  mounted(){
    this.getApi()
  }

}

</script>

<template>
  <body>
    
  
    <Header />
    <SearchBar @startSearch="getApi"/>
    <Main />
  </body>
</template>

<style lang="scss" >
@use './assets/scss/main.scss'

</style>
