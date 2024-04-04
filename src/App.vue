<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';
import axios from 'axios';
import {store} from './components/data/store'
import SearchBar from './components/partials/SearchBar.vue';
import Page from './components/partials/Page.vue';


export default {
  components:{
    Main,
    Header,
    SearchBar,
    Page

  },
  data(){
    return{
      store
      
    }
  },
  methods:{
    getApi(){
      
      axios.get(this.store.apiUrl, {
        params:this.store.cardParams
      })
      .then(res=>{
        this.store.cardsList= res.data.results
        console.log(this.store.cardsList)
        
        // this.store.statusList= res.data.results[0].status
        // console.log(this.store.statusList);
        store.cardsList.forEach(item=>{
          console.log(item.status)
          if(!store.statusList.includes(item.status)){
            store.statusList.push(item.status)
          }
        })
        console.log(store.statusList)
        
        
        

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
    <SearchBar
   
    @startSearch="getApi"/>
    <Main />
    <Page />
  </body>
</template>

<style lang="scss" >
@use './assets/scss/main.scss'

</style>
