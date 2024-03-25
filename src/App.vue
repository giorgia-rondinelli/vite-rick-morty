<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';
import axios from 'axios';
import {store} from './components/data/store'


export default {
  components:{
    Main,
    Header,

  },
  data(){
    return{
      store
      
    }
  },
  methods:{
    getApi(){
      console.log('vbkdfjgvb');
      axios.get(this.store.apiUrl)
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
  <div>
    <Header />
    <Main /></div>

</template>

<style lang="scss" >
@use './assets/scss/main.scss'

</style>
