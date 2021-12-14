<template>
  <div class= "m-auto">
  <h1 class="text-2xl text-center">DC Superhero List {{HeroesCount}}</h1>
  
  <ul>
    
     <li class="flex justify-between " v-for="(hero , index) in dcheros" :key="hero.name">
       <div>{{hero.name}}
       </div>
       <button @click="remove(index)">x</button>
       </li>
  </ul>
  <form 
  class="mt-10" @submit.prevent="addhero">

  <input class="border rounded" v-model.lazy="newhero" placeholder="Type Hero Name Here"/>

  <button class="border rounded bg-gradient-to-r  from-red-500 to-pink-600 text-sm text-white" type="submit">Add hero</button>
  

  </form>
</div>
</template>

<script>
export default {
    data(){
    return{
        
        newhero: "",
         dcheros: [
           {name: "supergirl"},
           {name: "flash"},
           {name: "superman"},
         ],

    };
  },
  
  computed:{
    HeroesCount() {
         return this.dcheros.length;
    },
    
  },
  
  methods: {
   addhero() {
     if(this.newhero !== ""){
    this.dcheros.push({name: this.newhero}); 
    this.newhero= " ";
     } 
   },
   remove(index) {
     this.dcheros = this.dcheros.filter((hero , i) => i !== index);
   },
  },

};
</script>

<style>

</style>