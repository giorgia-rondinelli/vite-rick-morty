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
  
  
    <div class="col m-4">
      <div class=" card" style="width: 18rem;">
        <img :src="immagine" class="card-img-top" alt="...">
        <div class="card-body text-center
         ">
          <h5 class="card-title">{{nome}}</h5>
          <p class="card-text">{{stato}}</p>
          <p class="card-text">{{specie}}</p>
          
        </div>
      </div>
   
  </div>
   
  
   


</template>

<style lang="scss" scoped>
.card{
  box-shadow: 4px 4px 15px rgb(164, 12, 164);
  
  }
.card:hover{
  box-shadow: 4px 4px 15px rgb(53, 249, 89)

}



  




</style>
