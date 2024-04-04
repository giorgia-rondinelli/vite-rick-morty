

import { reactive } from 'vue'

export const store= reactive({
  apiUrl:'https://rickandmortyapi.com/api/character',
  cardsList:[],
  cardParams:{
    name:'',
    status:''
    
  },
  statusList:[],

 

}) 