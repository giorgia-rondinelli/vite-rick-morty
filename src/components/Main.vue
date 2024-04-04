<script >
import {store} from './data/store'
import Character from './partials/Character.vue';

export default {
  components:{
    Character
  },
  data(){
    return{
      store
    }
  },
  methods:{
    log(){
      console.log(this.store.cardsList)
      console.log(this.store.cardsList)
    }
  },
  mounted(){
    this.log()
    
  }
}


</script>

<template>
  <div class="container">
    <div class="row">
    <Character 
    v-for="card in store.cardsList" :key="card.id"
    :immagine="card.image"
    :nome="card.name"
    :stato="card.status"
    :specie="card.species"/>
  </div>
  </div>
  <div>risultati : {{ store.cardsList.length }}</div>

</template>

<style lang="scss" scoped>


</style>./partials/charac.vue
