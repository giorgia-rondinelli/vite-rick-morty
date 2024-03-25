<script >
export default {
  props:{
    immagine:String,
    nome:String,
    stato:String,
    specie: String



  }

}

</script>

<template>

    <img :src="immagine"  alt="...">
    <div >
      <p > {{nome}}</p>
      <p>{{stato}}</p>
      <p >{{specie}}</p>
    </div>


</template>

<style lang="scss" scoped>



</style>
