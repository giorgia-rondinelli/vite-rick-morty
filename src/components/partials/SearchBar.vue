<script >
import { store } from '../data/store';

export default {
  data(){
    return{
      store,
      selected:'',
      
    }
  },
  methods:{
    startSearch(){
      
      this.$emit('startSearch')
      this.store.cardParams.name=''
      this.store.cardParams.status= this.selected

    },

  }

}

</script>

<template>
  <div class="text-center container  ">
    <div class="row d-flex justify-content-center ">
      <div class="">
  <input type="text" placeholder="search characters "  v-model="store.cardParams.name"
  @keyup.enter="startSearch">
  <button @click="startSearch">Search</button>  
  </div>
  <div class="">
    <select   v-model="selected" class=""  >
      <option value="">Please select one</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
      
    </select>
  </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>


</style>