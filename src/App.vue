<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';


export default {
  components:{
    Main,
    Header,

  },
  data(){
    return{
      
    }
  }

}

</script>

<template>
  <div>
    <Header />
    <Main /></div>

</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss'

</style>
