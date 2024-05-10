<template>
  <div class="home">

    <h1>home</h1>
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watch</button> -->


  </div>
</template>

<script>
import {computed , ref, watch, watchEffect} from 'vue'
export default {

    name:"compute",
    setup(){
    //     const search = ref("");
    //     const names = ref(["a","b","c"]);
    //    const stopWatch = watch(search,()=>{
    //         console.log("watch is running")
    //     })
    //     const stopWatchEffect = watchEffect(()=>{
    //         console.log("watch effect is running",search.value)
    //     })
    //     const matchingNames = computed(()=>{
    //         return names.value.filter((name) =>name.includes(search.value))
    //     })

    //     const handleClick = () =>{
    //         stopWatch();
    //         stopWatchEffect();
    //     }
    const posts = ref([{title:'welcome to the blog',body:'lorem ipsum',id:1},
                    {title:'top 5 css tips',body:'lorem ipsum',id:2}
                    ])
        // return {names,search,matchingNames,handleClick}
        return{posts}
    }
}
</script>

<style>

</style>