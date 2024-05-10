<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
props:['post'],
setup(props){
const snippet = computed(()=>{
    return props.post.body
})
return{snippet}
}
}
</script>

<style>

</style>