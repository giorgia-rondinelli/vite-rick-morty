<script >
import { store } from '../data/store';

export default {
  data(){
    return{
      store
    }
  },
  methods:{
    startSearch(){
      
      this.$emit('startSearch')
      this.store.cardParams.name=''
    }
  }

}

</script>

<template>
  <div class="text-center">
  <input type="text" placeholder="search characters "  v-model="store.cardParams.name"
  @keyup.enter="startSearch">
  <button @click="startSearch">Search</button>  
  </div>
</template>

<style lang="scss" scoped>


</style>